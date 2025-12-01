import {style_state} from "../../state/i.js";
import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    list,
} from '../../elems/i.js';
import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
} from '../../f/i.js';

export default (
    (e) => {
        var
            window = e.currentTarget,
            html_style = window.document.documentElement.style,
            w = window.innerWidth,
            h = window.innerHeight,

            row_height = style_state.row_height,

            list_width = 0,
            list_height = 0
        ;
        return void (
            html_style.setProperty(
                "--list-width",
                `${
                    list_width = (
                        w
                        - style_state.list_left
                        - style_state.list_right
                    )
                }px`
            ),

            html_style.setProperty(
                "--list-height",
                `${
                    list_height = (
                        h
                        - style_state.list_top
                        - style_state.list_bottom
                    )
                }px`
            ),

            (
                style_state
                .list_ratio = (
                    (
                        style_state.list_width = list_width
                    )
                    / (
                        style_state.list_height = list_height
                    )
                )
            ),

            html_style.setProperty("--width",`${w}px`),
            html_style.setProperty("--height",`${h}px`),

            (
                scrollbar_thumb_x_style
                .transform = (
                    scrollbar_thumb_x_transform(
                        style_state.thumb_x_translate,
                        (
                            style_state
                            .thumb_x_scale = (
                                list.offsetWidth
                                / list.scrollWidth
                            )
                        )
                    )
                )
            ),

            (
                scrollbar_thumb_y_style
                .transform = (
                    scrollbar_thumb_y_transform(
                        style_state.thumb_y_translate,
                        (
                            style_state
                            .thumb_y_scale = (
                                list.offsetHeight
                                / list.scrollHeight
                            )
                        )
                    )
                )
            )
        );
    }
);
