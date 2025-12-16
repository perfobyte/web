import {style_state} from '../../../state/i.js';

export default (
    (target, prop, receiver) => {
        console.log(prop, target[prop], style_state.extra_scroll_width, style_state.extra_scroll_height);
        
        return (
            (prop === "scrollWidth")
            ? (target[prop] + style_state.extra_scroll_width)
            :
            (prop === "scrollHeight")
            ? (target[prop] + style_state.extra_scroll_height)
            :
            (typeof(target[prop]) === "function")
            ? (...args)=>(target[prop](...args))
            :  target[prop]
        );
    }
);
