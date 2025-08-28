import {create} from '../../elems.js';
import {chat} from '../../state/i.js';

export default (
    (e) => {
        return (
            chat.clear("Add chat"),
            document.querySelector("#nv > ul > li:nth-child(2) > button").click()
        );
    }
)