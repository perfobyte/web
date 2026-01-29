

export default (
    (e, e_key, _) => {
        var
            zoom = _.zoom,
            S = _.S,
            min = _.min,
            cursors = _.cursors,
            selection_groups = _.selection_groups,
            selection_blocks = _.selection_blocks,
            rows = _.rows,
            tokens = _.tokens,
            A = _.A,
            scrollbar_thumb_x_transform = _.scrollbar_thumb_x_transform,
            scrollbar_thumb_y_transform = _.scrollbar_thumb_y_transform,
            init_cursors = _.init_cursors,

            fragment = _.fragment,
            list = _.list,
            text_width_container = _.text_width_container,

            html_style = _.html_style,
            scrollbar_thumb_x_style = _.scrollbar_thumb_x_style,
            scrollbar_thumb_y_style = _.scrollbar_thumb_y_style,
            node_text = _.node_text
        ;
        zoom(
            min(((S.zoom) + (S.zoom_step)), S.zoom_max),

            cursors,
            selection_groups,
            selection_blocks,

            rows,
            0,
            A.length_rows,

            tokens,
            0,
            A.length_tokens,
            
            S,
            
            scrollbar_thumb_x_transform,
            scrollbar_thumb_y_transform,
            init_cursors,

            fragment,
            list,
            text_width_container,

            html_style,
            scrollbar_thumb_x_style,
            scrollbar_thumb_y_style,
            node_text,
        )
    }
)