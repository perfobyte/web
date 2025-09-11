// inspect_primitive_blocks.js
import fs from "fs";

function readVarint(buf, pos) {
  let res = 0n, shift = 0n, i = pos;
  while (true) {
    const b = buf[i++];
    res |= BigInt(b & 0x7f) << shift;
    if ((b & 0x80) === 0) break;
    shift += 7n;
  }
  return [Number(res), i];
}
function readLen(buf, pos) {
  const [len, next] = readVarint(buf, pos);
  return [len, next, next + len];
}
function skipField(buf, pos, wire) {
  if (wire === 0) return readVarint(buf, pos)[1];
  if (wire === 1) return pos + 8;
  if (wire === 2) { const [len, p2] = readVarint(buf, pos); return p2 + len; }
  if (wire === 5) return pos + 4;
  throw new Error("wire=" + wire + " not supported");
}

// --- BlobHeader ---
function readBlobHeader(fd, offset) {
  const hlenBuf = Buffer.alloc(4);
  fs.readSync(fd, hlenBuf, 0, 4, offset.value);
  const headerSize = hlenBuf.readInt32BE(0);
  offset.value += 4;

  const headerBuf = Buffer.alloc(headerSize);
  fs.readSync(fd, headerBuf, 0, headerSize, offset.value);
  offset.value += headerSize;

  let pos = 0, datasize = 0, typeStr = null;
  while (pos < headerBuf.length) {
    const [key, p1] = readVarint(headerBuf, pos);
    pos = p1;
    const field = key >> 3, wire = key & 7;
    if (field === 1 && wire === 2) {
      const [len, p2, p3] = readLen(headerBuf, pos);
      typeStr = headerBuf.subarray(p2, p3).toString("utf8");
      pos = p3;
    } else if (field === 3 && wire === 0) {
      const [v, p2] = readVarint(headerBuf, pos);
      datasize = v; pos = p2;
    } else {
      pos = skipField(headerBuf, pos, wire);
    }
  }
  return { typeStr, datasize };
}

// --- извлечь raw payload ---
function readBlobRaw(fd, offset, datasize) {
  const buf = Buffer.alloc(datasize);
  fs.readSync(fd, buf, 0, datasize, offset.value);
  offset.value += datasize;

  let pos = 0;
  while (pos < buf.length) {
    const [key, p1] = readVarint(buf, pos);
    pos = p1;
    const field = key >> 3, wire = key & 7;
    if (field === 1 && wire === 2) {
      const [len, p2, p3] = readLen(buf, pos);
      return buf.subarray(p2, p3);
    } else {
      pos = skipField(buf, pos, wire);
    }
  }
  return null;
}

// --- парсинг PrimitiveBlock верхнего уровня ---
function parsePrimitiveBlock(payload) {
  let pos = 0;
  const out = {
    granularity: 100,
    lat_offset: 0,
    lon_offset: 0,
    date_granularity: 1000,
    string_count: 0,
    groups: 0
  };

  while (pos < payload.length) {
    const [key, p1] = readVarint(payload, pos);
    pos = p1;
    const field = key >> 3, wire = key & 7;

    if (field === 1 && wire === 2) { // StringTable
      const [len, p2, p3] = readLen(payload, pos);
      // посчитаем строки
      let stPos = p2, count = 0;
      while (stPos < p3) {
        const [k, stP1] = readVarint(payload, stPos);
        stPos = stP1;
        const f = k >> 3, w = k & 7;
        if (f === 1 && w === 2) {
          const [l, q2, q3] = readLen(payload, stPos);
          stPos = q3; count++;
        } else {
          stPos = skipField(payload, stPos, w);
        }
      }
      out.string_count = count;
      pos = p3;

    } else if (field === 2 && wire === 2) { // PrimitiveGroup[]
      const [len, p2, p3] = readLen(payload, pos);
      out.groups++;
      pos = p3;

    } else if (field === 17 && wire === 0) {
      const [v, p2] = readVarint(payload, pos);
      out.granularity = v; pos = p2;

    } else if (field === 19 && wire === 0) {
      const [v, p2] = readVarint(payload, pos);
      out.lat_offset = v; pos = p2;

    } else if (field === 20 && wire === 0) {
      const [v, p2] = readVarint(payload, pos);
      out.lon_offset = v; pos = p2;

    } else if (field === 18 && wire === 0) {
      const [v, p2] = readVarint(payload, pos);
      out.date_granularity = v; pos = p2;

    } else {
      pos = skipField(payload, pos, wire);
    }
  }

  return out;
}

// --- MAIN ---
(function main(file) {
  const fd = fs.openSync(file, "r");
  const offset = { value: 0 };
  const size = fs.statSync(file).size;

  // пропустить глобальный HeaderBlock
  {
    const { typeStr, datasize } = readBlobHeader(fd, offset);
    if (typeStr !== "OSMHeader") throw new Error("файл не начинается с OSMHeader");
    readBlobRaw(fd, offset, datasize);
  }

  // прочитать первые 10 PrimitiveBlock
  let blocks = 0;
  while (offset.value < size && blocks < 10) {
    const { typeStr, datasize } = readBlobHeader(fd, offset);
    if (typeStr === "OSMData") {
      const payload = readBlobRaw(fd, offset, datasize);
      const info = parsePrimitiveBlock(payload);
      console.log("Block #" + blocks, JSON.stringify(info));
      blocks++;
    } else {
      offset.value += datasize;
    }
  }

  fs.closeSync(fd);
})(
  "/home/dencelman/gt/space/app/map/code/f/application/pbf/planet-250901.raw.pbf"
);
