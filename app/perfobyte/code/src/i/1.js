

import {createServer} from "node:https";
import cb from '../cb.js';

(
    (cb,PORT, HOST,mode) => {
        
        return (
            createServer(
                cb(mode)
            )
            .listen(
                PORT,
                HOST,
                () => console.log(PORT)
            )
        );
    }
)(
    cb,
    443,
    '::',
    1,
);
