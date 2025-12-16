
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
        
        wheel_x_pixel_value:1,
        wheel_y_pixel_value:1,

        wheel_x_string_value: row_height,
        wheel_y_string_value: row_height,
        
        list_top: list_margin,
        list_right: list_margin,
        list_bottom: list_margin,
        list_left: list_margin,

        
        thumb_x_left:0,
        thumb_x_right:row_height,

        thumb_y_top:0,
        thumb_y_bottom:0,


        thumb_x_size:0,
        thumb_y_size:0,

        thumb_x_translate:0,
        thumb_y_translate:0,

        thumb_x_scale:1,
        thumb_y_scale:1,

        list_width:1,
        list_height:1,

        loaded_height:0,
        loaded_width:0,

        extra_scroll_width: 0,
        extra_scroll_height: 0,

        content_width: 0,
        content_height: 0,

        excess_x:0,
        excess_y:0,

        sensitivity_wheel: 0.002,
    }
})(
    22,
);
