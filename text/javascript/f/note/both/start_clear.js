import {stop} from '../../media/i.js';

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
