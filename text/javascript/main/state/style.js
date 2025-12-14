
export default ((row_height) => {
    return {
        font_size: 16,
        font_size_default: 16,
        font_size_step:1,
        font_id: 0,

        row_height,
        row_height_default: 22,
        
        zoom: 1,
        zoom_prev: 1,
        zoom_step: 0.1,
        zoom_default: 1,

        zoom_min: 0.375,
        zoom_max: 62.5,
        
        wheel_x_pixel_value:1,
        wheel_y_pixel_value:1,

        wheel_x_string_value:row_height,
        wheel_y_string_value:row_height,
        
        list_top:14,
        list_right:14,
        list_bottom:14,
        list_left:14,

        thumb_x_translate:0,
        thumb_y_translate:0,

        thumb_x_scale:1,
        thumb_y_scale:1,

        list_width:1,
        list_height:1,

        loaded_height:0,
    }
})(
    22,
);
