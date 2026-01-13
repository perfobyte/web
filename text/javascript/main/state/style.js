
export default ((height_row) => {
    var
        margin_list = 14,

        left_content = margin_list,
        top_content = margin_list,

        width_symbol = 20
    ;
    return {
        font_size: 16,
        font_size_default: 16,
        font_size_step:1,
        font_id: 4062975092252341068n,

        zoom: 1,
        zoom_step: 0.1,
        zoom_default: 1,
        zoom_min: 0.375,
        zoom_max: 62.5,
        
        height_row,
        height_scrollbar_y:0,
        height_list:1,
        height_content: 0,

        height_loaded:0,
        height_loaded_start:0,

        height_scroll_content:0,
        height_scrollbar_content:0,
        height_list_neg:1,
        height_row_default: height_row,
        
        width_row: 0,
        width_symbol,
        width_scrollbar_x:0,
        width_list:1,
        width_content: 0,
        
        width_loaded:0,
        width_loaded_start:0,

        width_scroll_content:0,
        width_scrollbar_content:0,

        width_cursor:(zoom) => (1 * zoom),

        width_list_neg:1,
        width_symbol_default: width_symbol,

        left_list: 0,
        left_content,
        left_scrollbar_x:0,

        top_list: 0,
        top_content,
        top_scrollbar_y:0,

        right_list: margin_list,
        right_content: 0,
        right_scrollbar_x:margin_list,

        bottom_list: margin_list,
        bottom_content: 0,
        bottom_scrollbar_y:0,

        translate_thumb_x:0,
        translate_thumb_y:0,

        scale_thumb_x:1,
        scale_thumb_y:1,

        lines_x:0,
        lines_y:0,
        
        value_wheel_x_pixel:1,
        value_wheel_x_string: height_row,
        value_wheel_y_pixel:1,
        value_wheel_y_string: height_row,

        value_wheel_x_pixel_default: 1,
        value_wheel_x_string_default: height_row,
        value_wheel_y_pixel_default: 1,
        value_wheel_y_string_default: height_row,
    }
})(
    22,
);
