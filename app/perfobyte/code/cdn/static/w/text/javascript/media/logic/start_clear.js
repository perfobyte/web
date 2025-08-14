import {stop} from '../f/i.js';

export default (
    (s) => (
        s
        .getTracks()
        .reduce(stop,s),

        navigator
        .mediaDevices
        .enumerateDevices()
    )
);
