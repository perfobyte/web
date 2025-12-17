
export default ((row_height) => {
    var
        list_margin = 14
    ;
    return {
        font_size: 16,
        font_size_default: 16,
        font_size_step:1,
        font_id: 0,

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

        content_left: list_margin,
        content_top: list_margin,
        content_right: 0,
        content_bottom: 0,
        
        scrollbar_thumb_x_left:0,
        scrollbar_thumb_x_right:row_height,

        scrollbar_thumb_y_top:0,
        scrollbar_thumb_y_bottom:0,

        // to know how far I can scroll
        scroll_size_x:0,
        scroll_size_y:0,

        // for CSS transform property:
        thumb_x_translate:0,
        thumb_y_translate:0,

        thumb_x_scale:1,
        thumb_y_scale:1,
        

        list_width:1,
        list_height:1,

        loaded_width: 0,
        loaded_height: 0,

        sensitivity_wheel: 0.002,
    }
})(
    22,
);
