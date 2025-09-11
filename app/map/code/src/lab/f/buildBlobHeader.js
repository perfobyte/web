import keyBuf from './keyBuf.js';
import writeVarintU from './writeVarintU.js';


export default (
    (typeStr, indexData, datasize, FIELD, W_LEN, W_VAR) => {
        var 
            parts = [],
            tb = null,
            header = null,
            hdrLen = null
        ;
        
        if (typeStr != null) {
            tb = Buffer.from(typeStr, "utf8");
            parts.push(keyBuf(FIELD.H_TYPE, W_LEN), writeVarintU(tb.length), tb);
        }
        if (indexData != null) {
            parts.push(keyBuf(FIELD.H_INDEX, W_LEN), writeVarintU(indexData.length), indexData);
        }

        parts.push(keyBuf(FIELD.H_DSIZE, W_VAR), writeVarintU(datasize));
        
        header = Buffer.concat(parts);
        hdrLen = Buffer.alloc(4);
        hdrLen.writeInt32BE(header.length, 0);
        return Buffer.concat([hdrLen, header]);
    }
)