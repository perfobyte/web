import {main} from '../../../elems/i.js';
import {prevent_scroll} from '../../../conf/i.js';

export default (
    (e) => {
        var
            input_el = main.element_input,

            window = e.view,
            document = window.document
        ;
        e.preventDefault();
        
        (input_el === document.body)
        ||
        (input_el.focus(prevent_scroll));
    }
);
