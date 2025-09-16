import { openSync, statSync, closeSync, readSync, writeSync } from "fs";
import { inflateSync } from "zlib";
import { writeVarintU, readVarint, keyBuf, buildBlobHeader } from './f/i.js';


((W_LEN, W_VAR, FIELD, inFile, outFile) => {
  var
    buildRawBlob = (rawPayload) => (
      Buffer.concat([keyBuf(FIELD.B_RAW, W_LEN), writeVarintU(rawPayload.length), rawPayload])
    ),
    rfd = openSync(inFile, "r"),
    wfd = openSync(outFile, "w"),
    size = statSync(inFile).size,

    offset = 0,
    blobs = 0,

    zlibBlobs = 0,
    rawBlobs = 0,

    hlenBuf = null,
    headerBuf = null,
    headerSize = 0,
    pos = 0,
    datasize = 0,
    blobBuf = null,
    blobBuf_l = 0,
    headerBuf_l = 0,
    key = 0,
    field = 0,
    wire = 0,
    _ = null,
    typeStr = null,
    indexData = null,
    p2 = 0,

    rawSize = null,
    dataField = 0,
    dataPos = 0,
    dataLen = 0,

    newBlobBuf = null,
    rawPayload = null
  ;
  while (offset < size) {
    hlenBuf = Buffer.alloc(4);
    readSync(rfd, hlenBuf, 0, 4, offset);
    headerSize = hlenBuf.readInt32BE(0);
    offset += 4;

    headerBuf = Buffer.alloc(headerSize);
    readSync(rfd, headerBuf, 0, headerSize, offset);
    offset += headerSize;

    pos = 0;
    datasize = 0;
    typeStr = null;
    indexData = null;

    headerBuf_l = headerBuf.length;
    
    while (pos < headerBuf_l) {
      field = (key = (_ = readVarint(headerBuf, pos))[0]) >> 3;
      wire  = (key & 7);
      pos   = _[1];

      if (field === FIELD.H_TYPE && wire === W_LEN) {
        typeStr = headerBuf.subarray(
          (p2=(_ = readVarint(headerBuf, pos))[1]),
          (pos = p2 + _[0])
        )
        .toString("utf8");
        
      } else if (field === FIELD.H_INDEX && wire === W_LEN) {
        indexData = headerBuf.subarray(
          (p2=(_ = readVarint(headerBuf, pos))[1]),
          (pos = p2 + _[0])
        );
      } else if (field === FIELD.H_DSIZE && wire === W_VAR) {
        datasize = (_ = readVarint(headerBuf, pos))[0];
        pos = _[1];
      } else if (wire === W_VAR) {
        pos = readVarint(headerBuf, pos)[1];
      } else if (wire === W_LEN) {
        _ = readVarint(headerBuf, pos);
        pos = _[1] + _[0];
      } else {
        break;
      }
    }

    if (typeStr == null) {
      throw new Error("BlobHeader.type not found");
    }

    blobBuf = Buffer.alloc(datasize);
    readSync(rfd, blobBuf, 0, datasize, offset);
    offset += datasize;

    pos = 0;
    blobBuf_l = blobBuf.length;

    rawSize = null;
    dataField = 0;
    dataPos = 0;
    dataLen = 0;

    while (pos < blobBuf_l) {
      field = (key = (_ = readVarint(blobBuf, pos))[0]) >> 3;
      wire  = (key & 7);
      pos   = _[1];

      if (field === FIELD.B_RAW_SIZE && wire === W_VAR) {
        rawSize = (_ = readVarint(blobBuf, pos))[0];
        pos = _[1];
        continue;
      }

      if (
        (
          field === FIELD.B_RAW || field === FIELD.B_ZLIB || field === FIELD.B_LZMA ||
          field === FIELD.B_BZ2 || field === FIELD.B_LZ4  || field === FIELD.B_ZSTD
        )
        && (wire === W_LEN)
      ) {
        _ = readVarint(blobBuf, pos);
        dataLen = _[0];
        dataPos = _[1];
        dataField = field;
        pos = dataPos + dataLen;
        continue;
      }

      if (wire === W_VAR) { pos = readVarint(blobBuf, pos)[1]; continue; }
      if (wire === W_LEN) { _ = readVarint(blobBuf, pos); pos = _[1] + _[0]; continue; }
      break;
    }
    
    if (dataField === FIELD.B_RAW) {
      
      newBlobBuf = buildRawBlob(
        blobBuf.subarray(dataPos, dataPos + dataLen)
      );
      rawBlobs++;
    } else if (dataField === FIELD.B_ZLIB) {
      rawPayload = inflateSync(blobBuf.subarray(dataPos, dataPos + dataLen));
      if (rawSize != null && rawPayload.length !== rawSize) throw new Error("raw_size mismatch");
      newBlobBuf = buildRawBlob(rawPayload);
      zlibBlobs++;
    } else {
      throw new Error(`Unsupported compression field=${dataField}`);
    }

    writeSync(
      wfd,
      buildBlobHeader(
        typeStr,
        indexData,
        newBlobBuf.length,
        FIELD,
        W_LEN,
        W_VAR,
      )
    );
    writeSync(wfd, newBlobBuf);

    blobs++;
    console.log(`#${blobs}  ${(offset / size * 100).toFixed(2)}%  zlib->raw: ${zlibBlobs}, passthrough raw: ${rawBlobs}`);
  }

  console.log("Done.");
  console.log({ blobs, zlibBlobs, rawBlobs });

  closeSync(rfd);
  closeSync(wfd);

})(
  2,
  0,
  {
    // Blob
    B_RAW_SIZE: 2,   // varint
    B_RAW: 1,        // len
    B_ZLIB: 3,       // len
    B_LZMA: 4,       // len
    B_BZ2: 5,        // len (obsolete)
    B_LZ4: 6,        // len
    B_ZSTD:7,        // len
    // BlobHeader
    H_TYPE: 1,       // len (string)
    H_INDEX: 2,      // len (bytes)
    H_DSIZE: 3       // varint
  },
  "/home/dencelman/gt/space/app/map/code/f/application/pbf/planet-250901.osm.pbf",
  "/home/dencelman/gt/space/app/map/code/f/application/pbf/planet-250901.raw.pbf",
);
