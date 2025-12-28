import {linebreaks} from '../../../conf/i.js';

export default (
    (
        string,
        msgs,

        i,
        l,

        elements,
        elems_i,
        elems_loaded,

        template,
        size_message,
        block_length,
        row_height,
        
        alloc_state,
        S,

        content,
        html_style,
        fragment,
        range,

        text_width,
        text_width_container,
    ) => {
        var
            element = null,
            
            char_i = 0,
            char_l = 0,
            string_offset = 0,
            next = 0,
            max_width = 0,

            chunk = "",
            
            new_length = 0,

            elements_l = elements.length,

            style = null,

            element_left = S.content_left,

            content_top = S.content_top,
            style_top = content_top,

            px = row_height
        ;
        
        general: while (true) {
            append: {
                while (i < l) {
                    char_i = msgs.getUint16(i+12,true);
                    char_l = (char_i + (msgs.getUint16(i+14,true)));
                    
                    while (char_i < char_l) {
                        next = (char_i + 1);

                        if (
                            linebreaks.includes(string[char_i])
                        ) {
                            chunk = string.substring(string_offset, char_i);

                            max_width = (
                                Math.max(
                                    max_width,
                                    text_width(text_width_container,(chunk))
                                )
                            );

                            if (elems_i >= elements_l) {
                                new_length = (elems_l + block_length);
                                
                                for (;elements_l < new_length; elements_l++) {
                                    elements.push(template.cloneNode(true))
                                };
                            };

                            (element = elements[elems_i++])
                            .firstElementChild
                            .textContent = (
                                chunk
                            );

                            style = element.style;

                            style.top = `${style_top}px`;
                            style.left = `${element_left}px`;

                            style_top += px;

                            string_offset = next;
                        };

                        char_i = next;
                    };

                    if (string_offset < char_l) {
                        if (elems_i >= elements_l) {
                            new_length = (elems_l + block_length);
                            
                            for (;elements_l < new_length; elements_l++) {
                                elements.push(template.cloneNode(true))
                            };
                        };

                        (element = elements[elems_i++])
                        .firstElementChild
                        .textContent = (
                            string.substring(string_offset, char_l)
                        );

                        style = element.style;

                        style.top = `${style_top}px`;
                        style.left = `${element_left}px`;

                        style_top += px;
                    }

                    i += size_message;
                }
                break general;
            };
        };

        (
            (elems_i > elems_loaded)
            ? (
                fragment.append(...(elements.slice(elems_loaded, elems_i))),
                content.appendChild(fragment),
                true
            )
            :
            (elems_i < elems_loaded)
            ? (
                range.setStartBefore(elements[elems_i]),
                range.setEndAfter(elements[elems_loaded - 1]),
                range.deleteContents(),
                true
            )
            : false
        )
        && (alloc_state.length_loaded_elements = elems_i);

        S.loaded_height = (style_top - content_top);

        html_style.setProperty(
            "--content-height",
            `${
                S.content_height = (
                    style_top
                    + (S.content_bottom)
                )
            }px`
        );
        
        html_style.setProperty(
            "--content-width",
            `${
                S.content_width = (
                    (element_left)
                    + (S.loaded_width = (max_width))
                    + (S.content_right)
                )
            }px`
        );
    }
);
