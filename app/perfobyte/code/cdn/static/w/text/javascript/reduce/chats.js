import {CHA,chatbar} from '../elems.js';
import {chatbar_set} from '../set/i.js';


export default (
    (r,el,i) => (
        CHA.appendChild(
            chatbar_set(chatbar.cloneNode(true),el,i)
        ),
        r
    )    
);
