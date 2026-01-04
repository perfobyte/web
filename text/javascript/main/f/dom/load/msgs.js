import {linebreaks} from '../../../conf/i.js';

export default (
    (
        default_row_inline_class,

        blocks,
        offset_blocks,

        msgs,
        i,
        l,

        elems,
        elems_i,
        elems_loaded,

        template,
        size_message,
        block_length,
        height_row,
        
        state_alloc,
        S,

        content,
        html_style,
        fragment,
        range,

        TW,

        element_template,
    ) => {
        var
            element = null,
            string = '',
            
            char_i = 0,
            char_l = 0,
            string_offset = 0,
            next = 0,
            max_width = 0,

            chunk = "",
            
            new_length = 0,

            elements_l = elems.length,

            style = null,

            right_content = S.right_content,

            element_left = S.left_content,

            top_content = S.top_content,
            style_top = top_content,

            px = height_row,

            inline = null,

            w = 0,
            h = 0,
            width_row = 0,

            message = null,

            e = null,

            message_id = 0,

            x = 0,
            y = 0,

            block = null
        ;

        TW.className = default_row_inline_class;

        general: while (true) {
            append: {
                while (i < l) {
                    message = msgs[i];

                    char_i = message.offset;
                    char_l = (char_i + (message.length));

                    block = message.block;
                    
                    string = block.value;
                    
                    while (char_i < char_l) {
                        next = (char_i + 1);

                        if (
                            linebreaks.includes(string[char_i])
                        ) {
                            if (elems_i >= elements_l) {
                                new_length = (elems_l + block_length);
                                
                                for (;elements_l < new_length; elements_l++) {
                                    elems.push(element_template(template))
                                };
                            };
                            e = elems[elems_i];
                            e.x = 0;
                            e.i = e.y = elems_i++;

                            e.message = message;
                            e.block = block;

                            element = e.element;

                            chunk = string.substring((e.start=string_offset), (e.end=char_i));
                            
                            e.length = chunk.length;
                            
                            TW.replaceChildren(new Text(chunk));
                            
                            w = (TW.offsetWidth);
                            e.width = w;
                            h = TW.offsetHeight;
                            e.height = h;


                            max_width = (Math.max(max_width,w));

                            
                            inline = element.firstElementChild;
                            
                            // inline.style.width = `${w}px`;
                            inline.replaceChildren(new Text(chunk));
                            
                            style = element.style;

                            style.top = `${style_top}px`;
                            style.left = `${element_left}px`;

                            e.bottom = ((e.top = style_top) + h);
                            e.right = ((e.left = element_left) + w);

                            style_top += px;

                            string_offset = next;
                        };

                        char_i = next;
                    };

                    if (string_offset < char_l) {
                        if (elems_i >= elements_l) {
                            new_length = (elems_l + block_length);
                            
                            for (;elements_l < new_length; elements_l++) {
                                elems.push(element_template(template));
                            };
                        };

                        e = elems[elems_i];
                        e.i = e.y = elems_i++;

                        e.message = message;
                        e.block = block;

                        element = e.element;

                        chunk = string.substring((e.start=string_offset), (e.end=char_l));
                        
                        e.length = chunk.length;

                        TW.replaceChildren(new Text(chunk))
                        
                        w = (TW.offsetWidth);
                        h = (TW.offsetHeight);

                        e.width = w;
                        e.height = h;

                        max_width = (Math.max(max_width,w));

                        inline = element.firstElementChild;

                        // inline.style.width = `${w}px`;
                        inline.replaceChildren(new Text(chunk));
                        
                        style = element.style;

                        style.top = `${style_top}px`;
                        style.left = `${element_left}px`;

                        e.bottom = ((e.top = style_top) + h);
                        e.right = ((e.left = element_left) + w);
                        
                        style_top += px;
                    }

                    i++;
                }
                break general;
            };
        };

        if (elems_i > elems_loaded) {
            while (elems_loaded < elems_i) {
                fragment.appendChild(elems[elems_loaded++].element);
            };
            
            content.appendChild(fragment);
            state_alloc.length_loaded_elems = elems_i;
        }
        else if (elems_i < elems_loaded) {
            range.setStartBefore(elems[elems_i].element);
            range.setEndAfter(elems[elems_loaded - 1].element);
            range.deleteContents();
            state_alloc.length_loaded_elems = elems_i;
        }

        S.height_loaded_start = (style_top);
        S.height_loaded = (style_top - top_content);

        S.height_content = (style_top += (S.bottom_content));

        width_row = (S.width_row = ((S.width_loaded = max_width) + right_content));

        S.width_content = (
            (
                S.width_loaded_start = (
                    max_width
                    + (element_left)
                )
            )
            + (right_content)
        );
        
        html_style.setProperty("--width-row", `${width_row}px`);

        html_style.setProperty("--height-content",`${style_top}px`);
        html_style.setProperty("--width-content", `${max_width}px`);
    }
);
