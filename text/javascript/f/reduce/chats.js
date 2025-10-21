import {CHA,chatbar} from '../../elems/i.js';
import {chatbar_set} from '../i.js';


export default (
    (r,el,i) => (
        CHA.appendChild(
            chatbar_set(chatbar.cloneNode(true),el,i)
        ),
        r
    )    
);
