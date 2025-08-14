import {record_video} from './i.js';

export default (
    (o) => (
        console.dir(o),
        
        navigator
        .mediaDevices
        .getUserMedia(o)
        .then(record_video)
    )
);
