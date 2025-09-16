import {readSync} from 'fs';
import {skipField, readVarint, readLen} from './i.js';


export default (
    (fd, offset, datasize) => {
        var
            blobBuf = Buffer.alloc(datasize),
            pos = 0,
            blobBuf_l = 0,
            sub_a = null,
            field = 0,
            wire = 0,
            key = 0,
            _ = null,
            _l = null
        ;
        readSync(fd, blobBuf, 0, datasize, offset.value);
        offset.value += datasize;

        blobBuf_l = blobBuf.length;
        while (pos < blobBuf_l) {
            field = (key=(_ = readVarint(blobBuf, pos))[0]) >> 3;
            wire = key & 7;
            pos = _[1];
        
            if (field === 1 && wire === 2) {
                sub_a =
                    blobBuf.subarray(
                        (_l = readLen(blobBuf, pos))[1],
                        _l[2]
                    );
                break;
            } else {
                pos = skipField(blobBuf, pos, wire);
            }
        }
        return (
            sub_a||(console.error("Blob.raw not found"),null)
        );
    }
)