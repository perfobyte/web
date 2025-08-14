
import {record_audio} from './i.js';

export default (
    (o) =>
        navigator
        .mediaDevices
        .getUserMedia(o)
        .then(record_audio)
);
