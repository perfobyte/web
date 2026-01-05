import {on_list_mousemove} from '../move/i.js';

export default (
    () => {
        var
            on_list_mouseup = (e) => {
                var list = e.currentTarget;
                
                list.removeEventListener("mousemove", on_list_mousemove);
                list.removeEventListener("mouseup", on_list_mouseup);
            }
        ;
        return on_list_mouseup;
    }
)();
