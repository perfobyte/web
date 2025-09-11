
export default (
    (buf, pos) => {
        var
            res = 0n,
            shift = 0n,
            i = pos,
            b = 0n
        ;
        while (true) {
            b = BigInt(buf[i++]);
            res |= (b & 0x7fn) << shift;
            if ((b & 0x80n) === 0n) break;
            shift += 7n;
        }
        return [res, i];
    }
)