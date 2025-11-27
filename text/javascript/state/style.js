import language from './language.js';

export default (() => {
    var
        row_height = 22
    ;
    return {
        row_height,
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
        
        font_id:0,
        font_size:16,
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
