import {statSync} from 'fs';


export default (
    (p) => statSync(p).size
);
