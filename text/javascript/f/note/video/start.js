import record_video from './record.js';

export default (
    (o) => (
        navigator
        .mediaDevices
        .getUserMedia(o)
        .then(record_video)
    )
);
