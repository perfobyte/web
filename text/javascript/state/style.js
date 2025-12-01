import language from './language.js';

export default (() => {
    var
        row_height = 22,
        font_size = 16
    ;
    return {
        font_size,
        row_height,
        
        font_size_default:16,
        row_height_default:22,

        font_size_step:1,

        zoom:1,
        zoom_step:0.1,

        zoom_min: 0.375,
        zoom_max: 62.5,

        zoom_default:1,

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
        list_ratio:1,
        
        font_id:0,
        font_face:null,

        style: "normal",
        weight: "400",
        stretch: "normal",
        display: "swap",

        unicodeRange: undefined,
        featureSettings: undefined,

        language,
    }
})();
