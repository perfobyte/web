

export default (
    (
        state,
        new_zoom,
        style,
        number_clamp,
        list,
        recalculate_rows_top,
    ) => {
        var
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

            rows = list.querySelectorAll(".message_row")
        ;
        return (
            recalculate_rows_top(rows, 0, new_row_height, 0, rows.length),
            style.setProperty("--row-height",`${state.row_height = new_row_height}px`),
            style.setProperty("--font-size",`${state.font_size = new_font_size}px`)
        );
    }
);
