

export default (
    (state, zoom_code, style, number_clamp, list) => {
        var
            new_zoom = (
                state.zoom = (
                    (zoom_code < 4)
                    ? (
                        number_clamp(
                            (
                                (zoom_code < 2)
                                ? (
                                    state.zoom
                                    + state.zoom_step
                                )
                                : (
                                    state.zoom
                                    - state.zoom_step
                                )
                            ),
                            state.zoom_min,
                            state.zoom_max,

                            Math.min,
                            Math.max,
                        )
                    )
                    : (
                        state.zoom_default
                    )
                )
            ),

            new_row_height = (
                state
                .row_height = (
                    state.row_height_default
                    * new_zoom
                )
            ),

            new_font_size = (
                state
                .font_size = (
                    state.font_size_default
                    * new_zoom
                )
            ),

            rows = list.querySelectorAll(".message_row"),

            i = 0,
            l = rows.length,
            top = 0
        ;
        
        for(;i<l;i++){
            rows[i].style.top = `${top}px`;
            top += new_row_height;
        };

        return void (
            style.setProperty("--row-height",`${new_row_height}px`),
            style.setProperty("--font-size",`${new_font_size}px`)
        );
    }
);
