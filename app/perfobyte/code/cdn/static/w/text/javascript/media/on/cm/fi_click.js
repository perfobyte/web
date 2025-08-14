import files from '../../files.js';
import O from '../../../state/O.js';


export default (
    (e) => {
        var
            m = O.m
        ;
        return (
            console.dir(m),
            files[m].click()
        );
    }
);
