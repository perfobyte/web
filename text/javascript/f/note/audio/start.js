
import record_audio from './record.js';

export default (
    (o) => (
        navigator
        .mediaDevices
        .getUserMedia(o)
        .then(record_audio)
    )
);
