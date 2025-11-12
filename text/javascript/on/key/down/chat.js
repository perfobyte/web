import {send_button, click_event} from '../../../elems/i.js';


export default (
    (e) => {
        var
            k = e.keyCode
        ;
        return (
            (k === 13)
            &&
            (
                (e.shiftKey)
                ||
                (
                    e.preventDefault(),
                    send_button.dispatchEvent(click_event)
                )
            ),

            undefined
        );
    }
);
