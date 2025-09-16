export default (zz) => {
    return Number(((zz >> 1n) ^ (-(zz & 1n))));
};