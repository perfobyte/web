import {style_state} from "../../state/i.js";

export default (
    (e) => {
        var
            window = e.currentTarget,
            html_style = window.document.documentElement.style,
            w = window.innerWidth,
            h = window.innerHeight,

            row_height = style_state.row_height,

            rows = Math.ceil(w / row_height),
            row_height_2 = (row_height * 2)
        ;
        
        return (
            (style_state.rows = rows),
            (style_state.cols = Math.floor(0)),

            html_style.setProperty("--list-width",`${w - (row_height_2)}px`),
            html_style.setProperty("--list-height",`${h - (row_height_2)}px`),
            
            html_style.setProperty("--width",`${w}px`),
            html_style.setProperty("--height",`${h}px`)
        );
    }
);
