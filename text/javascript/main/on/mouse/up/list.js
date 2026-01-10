import {on_list_mousemove} from '../move/i.js';

export default (
    () => {
        var
            on_list_mouseup = (e) => {
                var window = e.currentTarget;
                
                window.removeEventListener("mousemove", on_list_mousemove);
                window.removeEventListener("mouseup", on_list_mouseup);
            }
        ;
        return on_list_mouseup;
    }
)();
