import {note} from '../../../state/i.js';
import nt_mup from './mup.js';

export default (
    (e) => (
        window.removeEventListener("mouseup",nt_mup),
        
        (note.s=false),
        note.r?.stop()
    )
);
