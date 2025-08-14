import {cm_ts} from '../elems.js';
import {time} from '../f/i.js';
import ts from '../ts.js';

export default (
    (e) => {
        return (
            cm_ts.textContent = (
                time(++ts[0])
            )
        );
    }
);
