

export default {
    1: (b,i,v,le) => (b.setUint8(i, v)),
    2: (b,i,v,le) => (b.setUint16(i, v, le)),
    4: (b,i,v,le) => (b.setUint32(i, v, le)),
    8: (b,i,v,le) => (b.setUint64(i, v, le)),
};
