export default (
    (n) => {
        var
            out = [],
            v = BigInt(n >>> 0)
        ;
        while (v >= 0x80n) {
            out.push(Number((v & 0x7fn) | 0x80n));
            v >>= 7n;
        }
        out.push(Number(v));
        return Buffer.from(out);
    }
)