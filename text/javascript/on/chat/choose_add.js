import {create} from '../../elems/i.js';
import {chat} from '../../state/i.js';

export default (
    (e) => {
        return (
            chat.clear("Add chat"),
            document.querySelector("#nv > * > li:nth-child(2) > button").click()
        );
    }
)