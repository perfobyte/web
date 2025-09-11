

export default (
    (buf, pos) => {
        var
            res = 0n,
            shift = 0n,
            b = 0,
            i = pos
        ;
    
        while (true) {
            res |= BigInt((b = buf[i++]) & 0x7f) << shift;
            if ((b & 0x80) === 0) break;
            shift += 7n;
        }
        return [
            Number(res),
            i,
        ];
    }
);