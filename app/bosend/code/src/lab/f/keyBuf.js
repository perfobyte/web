import writeVarintU from './writeVarintU.js';

export default (field, wire) => {
    return writeVarintU((field << 3) | wire);
};
