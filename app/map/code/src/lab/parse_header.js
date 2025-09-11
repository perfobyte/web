// parse_osm_header_block.js
// Парсинг ОДНОГО HeaderBlock из raw PBF без сторонних библиотек.

import fs from "fs";

// ---------- Protobuf helpers (varint, zigzag, len-delimited) ----------
function readVarint(buf, pos) {
  let res = 0n;
  let shift = 0n;
  let i = pos;
  while (true) {
    const b = buf[i++];
    res |= BigInt(b & 0x7f) << shift;
    if ((b & 0x80) === 0) break;
    shift += 7n;
  }
  return [Number(res), i];
}
function readVarint64(buf, pos) {
  let res = 0n;
  let shift = 0n;
  let i = pos;
  while (true) {
    const b = BigInt(buf[i++]);
    res |= (b & 0x7fn) << shift;
    if ((b & 0x80n) === 0n) break;
    shift += 7n;
  }
  return [res, i]; // BigInt
}
const zigzag64_to_num = (zz) => {
  // zz: BigInt
  // sint64 decode: (zz >> 1) ^ -(zz & 1)
  const n = (zz >> 1n) ^ (-(zz & 1n));
  // В нашем кейсе значения укладываются в Number (<= 1e12 по bbox, timestamps ~1e10)
  return Number(n);
};
function readLen(buf, pos) {
  const [len, next] = readVarint(buf, pos);
  return [len, next, next + len];
}
function readString(buf, pos) {
  const [len, p2, p3] = readLen(buf, pos);
  return [buf.subarray(p2, p3).toString("utf8"), p3];
}
function skipField(buf, pos, wire) {
  if (wire === 0) return readVarint(buf, pos)[1];            // varint
  if (wire === 1) return pos + 8;                            // 64-bit
  if (wire === 2) { const [len, p2] = readVarint(buf, pos); return p2 + len; } // length-delimited
  if (wire === 5) return pos + 4;                            // 32-bit
  throw new Error("unsupported wire type " + wire);
}

// ---------- Parse BlobHeader just to get datasize ----------
function readFirstBlobHeader(fd, offset) {
  const lenBuf = Buffer.alloc(4);
  fs.readSync(fd, lenBuf, 0, 4, offset.value);
  const headerSize = lenBuf.readInt32BE(0);
  offset.value += 4;

  if (headerSize <= 0 || headerSize > 64 * 1024) {
    throw new Error("Suspicious BlobHeader size: " + headerSize);
  }

  const headerBuf = Buffer.alloc(headerSize);
  fs.readSync(fd, headerBuf, 0, headerSize, offset.value);
  offset.value += headerSize;

  let pos = 0;
  let datasize = 0;
  let typeStr = null;

  while (pos < headerBuf.length) {
    const [key, p1] = readVarint(headerBuf, pos);
    pos = p1;
    const field = key >> 3;
    const wire = key & 7;

    if (field === 1 && wire === 2) { // type
      const [s, p2] = readString(headerBuf, pos);
      typeStr = s;
      pos = p2;
    } else if (field === 3 && wire === 0) { // datasize
      const [v, p2] = readVarint(headerBuf, pos);
      datasize = v;
      pos = p2;
    } else {
      pos = skipField(headerBuf, pos, wire);
    }
  }

  if (typeStr == null) throw new Error("BlobHeader.type not found");
  if (datasize <= 0 || datasize > 64 * 1024 * 1024) {
    throw new Error("Suspicious Blob.datasize: " + datasize);
  }

  return { typeStr, datasize };
}

// ---------- Parse Blob to extract field #1 raw (length-delimited) ----------
function readBlobRawPayload(fd, offset, datasize) {
  const blobBuf = Buffer.alloc(datasize);
  fs.readSync(fd, blobBuf, 0, datasize, offset.value);
  offset.value += datasize;

  let pos = 0;
  while (pos < blobBuf.length) {
    const [key, p1] = readVarint(blobBuf, pos);
    pos = p1;
    const field = key >> 3;
    const wire = key & 7;

    if (field === 1 && wire === 2) { // raw
      const [len, p2, p3] = readLen(blobBuf, pos);
      return blobBuf.subarray(p2, p3); // HeaderBlock payload
    } else {
      pos = skipField(blobBuf, pos, wire);
    }
  }
  throw new Error("Blob.raw not found");
}

// ---------- Parse HeaderBBox (embedded message) ----------
function parseHeaderBBox(buf, start, end) {
  let pos = start;
  const bbox = { left: null, right: null, top: null, bottom: null };
  while (pos < end) {
    const [key, p1] = readVarint(buf, pos);
    pos = p1;
    const field = key >> 3;
    const wire = key & 7;

    if ((field === 1 || field === 2 || field === 3 || field === 4) && wire === 0) {
      // sint64 -> varint zigzag
      const [v, p2] = readVarint64(buf, pos);
      pos = p2;
      const n = zigzag64_to_num(v);
      if (field === 1) bbox.left = n;
      else if (field === 2) bbox.right = n;
      else if (field === 3) bbox.top = n;
      else if (field === 4) bbox.bottom = n;
    } else {
      pos = skipField(buf, pos, wire);
    }
  }
  return bbox;
}

// ---------- Parse HeaderBlock ----------
function parseHeaderBlock(payload) {
  let pos = 0;
  const hb = {
    bbox: null,
    required_features: [],
    optional_features: [],
    writingprogram: null,
    source: null,
    osmosis_replication_timestamp: null,
    osmosis_replication_sequence_number: null,
    osmosis_replication_base_url: null,
  };

  while (pos < payload.length) {
    const [key, p1] = readVarint(payload, pos);
    pos = p1;
    const field = key >> 3;
    const wire = key & 7;

    if (field === 1 && wire === 2) { // HeaderBBox (len-delimited)
      const [len, p2, p3] = readLen(payload, pos);
      hb.bbox = parseHeaderBBox(payload, p2, p3);
      pos = p3;

    } else if (field === 4 && wire === 2) { // required_features (string)
      const [s, p2] = readString(payload, pos);
      hb.required_features.push(s);
      pos = p2;

    } else if (field === 5 && wire === 2) { // optional_features (string)
      const [s, p2] = readString(payload, pos);
      hb.optional_features.push(s);
      pos = p2;

    } else if (field === 16 && wire === 2) { // writingprogram
      const [s, p2] = readString(payload, pos);
      hb.writingprogram = s;
      pos = p2;

    } else if (field === 17 && wire === 2) { // source
      const [s, p2] = readString(payload, pos);
      hb.source = s;
      pos = p2;

    } else if (field === 32 && wire === 0) { // osmosis_replication_timestamp (int64)
      const [v, p2] = readVarint64(payload, pos);
      hb.osmosis_replication_timestamp = Number(v);
      pos = p2;

    } else if (field === 33 && wire === 0) { // osmosis_replication_sequence_number (int64)
      const [v, p2] = readVarint64(payload, pos);
      hb.osmosis_replication_sequence_number = Number(v);
      pos = p2;

    } else if (field === 34 && wire === 2) { // osmosis_replication_base_url
      const [s, p2] = readString(payload, pos);
      hb.osmosis_replication_base_url = s;
      pos = p2;

    } else {
      pos = skipField(payload, pos, wire);
    }
  }

  // Удобно добавить bbox в градусах:
  if (hb.bbox) {
    const toDeg = (n) => n / 1e9;
    hb.bbox_degrees = {
      left: toDeg(hb.bbox.left),
      right: toDeg(hb.bbox.right),
      top: toDeg(hb.bbox.top),
      bottom: toDeg(hb.bbox.bottom),
    };
  }

  return hb;
}

// ---------- main: открыть файл, вычитать HeaderBlock, распечатать JSON ----------
(function main(file) {
  const fd = fs.openSync(file, "r");
  const size = fs.statSync(file).size;
  const offset = { value: 0 };

  // 1) Первый BlobHeader -> datasize + type
  const { typeStr, datasize } = readFirstBlobHeader(fd, offset);
  if (typeStr !== "OSMHeader") {
    throw new Error(`Первый блок не OSMHeader, а ${typeStr}`);
  }

  // 2) Blob -> raw payload (HeaderBlock protobuf)
  const payload = readBlobRawPayload(fd, offset, datasize);

  // 3) Полный парсинг HeaderBlock
  const header = parseHeaderBlock(payload);

  fs.closeSync(fd);

  // 4) Вывод
  console.log(JSON.stringify(header, null, 2));
})(
  // Укажи путь к ТВОЕМУ raw PBF
  "/home/dencelman/gt/space/app/map/code/f/application/pbf/planet-250901.raw.pbf"
);
