import {support_format_image, support} from '../state/i.js';
import {IMG, image_mime, image_mime_l} from '../conf.js';
import {loader_cl, html} from '../elems.js';
import {update_height} from '../f/i.js';


export default (
    function(e) {
        var
            image_test = support[0]
        ;
        return (
            (support_format_image[image_test] = Number(e.type === "load")),
            (
                image_mime_l === (
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
                update_height(1),
                (html.scrollTop = html.scrollHeight),
                loader_cl.remove("a")
            )
            : (
                IMG.src = image_mime[image_test]
            )
        )
    }
);
