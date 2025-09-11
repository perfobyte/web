import {readSync} from 'fs';
import {skipField,readVarint} from './i.js';


export default (
    (fd, offset) => {
        var
            lenBuf = Buffer.alloc(4),
            headerSize = (
                readSync(fd, lenBuf, 0, 4, offset.value),
                lenBuf.readInt32BE(0)
            ),
            pos = 0,
            datasize = 0,
            typeStr = null,
            headerBuf_l = 0,
            headerBuf = null,
            key = 0,
            _ = null,
            field = 0,
            wire = 0
        ;
        
        offset.value += 4;
      
        if (headerSize <= 0 || headerSize > 64 * 1024) {
          throw new Error("Suspicious BlobHeader size: " + headerSize);
        }
      
        headerBuf = Buffer.alloc(headerSize);
        readSync(fd, headerBuf, 0, headerSize, offset.value);
        offset.value += headerSize;

        headerBuf_l = headerBuf.length;

        while (pos < headerBuf_l) {
          field = (key=(_=readVarint(headerBuf, pos))[0]) >> 3;
          wire = key & 7;
          pos = _[1];
      
          if (field === 1 && wire === 2) {
            typeStr = (_=readString(headerBuf, pos))[0];
            pos = _[1];
          } else if (field === 3 && wire === 0) {
            datasize = (_=readVarint(headerBuf, pos))[0];
            pos = _[1];
          } else {
            pos = skipField(headerBuf, pos, wire);
          }
        }
      
        if (typeStr == null) throw new Error("BlobHeader.type not found");
        if (datasize <= 0 || datasize > 67108864) {
          throw new Error("Suspicious Blob.datasize: " + datasize);
        }
      
        return { typeStr, datasize };
    }
)