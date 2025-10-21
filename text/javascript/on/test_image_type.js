import {support_codec, support_format, support} from '../state/i.js';
import {API_1} from '../conf/i.js';
import {app_start} from '../f/i.js';

export default (
    function(e) {
        var
            image_test = support[0],
            image_mime = support_codec[1]
        ;
        return (
            (support_format[1][image_test] = Number(e.type === "load")),
            (
                image_mime.length === (
                    support[0] = (
                        ++image_test
                    )
                )
            )
            ? (
                (
                    this.onload =
                    this.onerror =
                        null
                ),
                
                app_start()
            )
            : (
                API_1.src = image_mime[image_test]
            )
        )
    }
);
