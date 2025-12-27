
export default ((row_height) => {
    var
        list_margin = 14,

        content_left = list_margin,
        content_top = list_margin
    ;
    return {
        font_size: 16,
        font_size_default: 16,
        font_size_step:1,
        font_id: 4062975092252341068n,

        row_height,
        row_height_default: 22,
        
        zoom: 1,
        zoom_step: 0.1,
        zoom_default: 1,

        zoom_min: 0.375,
        zoom_max: 62.5,
        
        // scroll:
        wheel_x_pixel_value:1,
        wheel_y_pixel_value:1,

        wheel_x_string_value: row_height,
        wheel_y_string_value: row_height,

        wheel_x_pixel_value_default: 1,
        wheel_y_pixel_value_default: 1,

        wheel_x_string_value_default: row_height,
        wheel_y_string_value_default: row_height,
        
        list_left: 0,
        list_top: 0,
        list_right: list_margin,
        list_bottom: list_margin,

        content_left,
        content_top,
        content_right: 0,
        content_bottom: 0,
        
        scrollbar_x_left:0,
        scrollbar_x_right:row_height,

        scrollbar_y_top:0,
        scrollbar_y_bottom:0,

        // to know how far I can scroll
        list_width:1,
        list_height:1,

        content_width: 0,
        content_height: 0,

        loaded_width:content_left,
        loaded_height:content_top,

        scroll_size_x:0,
        scroll_size_y:0,

        scroll_content_width:0,
        scroll_content_height:0,

        // for CSS transform property:
        thumb_x_translate:0,
        thumb_y_translate:0,

        thumb_x_scale:1,
        thumb_y_scale:1,
    }
})(
    22,
);
