import {linebreaks} from '../../../conf/i.js';

export default (
    (
        default_row_inline_class,
        
        msgs,
        i,
        l,

        tokens,
        tokens_i,
        length_tokens,

        rows,
        rows_i,
        length_rows,

        ROW_EL,
        TOKEN_EL,

        size_rows,
        size_tokens,
        height_row,
        
        A,
        S,

        content,
        html_style,
        fragment,
        range,

        TW,

        Token,
        Row,
        
        Text,
        node_text,
    ) => {
        var
            TokenDefault = Token.prototype.default,
            RowDefault = Row.prototype.default,

            token_el = null,
            string = '',
            
            char_i = 0,
            char_l = 0,
            string_offset = 0,
            next = 0,
            max_width = 0,

            chunk = "",
            
            new_length = 0,

            tokens_l = tokens.length,
            rows_l = rows.length,

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

            t = null,

            message_id = 0,

            x = 0,
            y = 0,

            block = null,
            row = null,
            row_el = null,
            buffer = null,

            end = 0
        ;

        TW.className = default_row_inline_class;
        TW.replaceChildren(node_text);

        
        while (i < l) {
            message = msgs[i];

            char_i = message.start;
            char_l = message.end;
            
            block = message.block;
            
            string = (block.buffer).value;
            
            string_offset = char_i;
            message.tokens_i = tokens_i;
            
            while (char_i < char_l) {
                next = (char_i + 1);

                if (
                    (
                        (
                            linebreaks.includes(
                                string[char_i]
                            )
                        )
                        ? ((end = char_i),true)
                        : false
                    )
                    ||
                    (
                        (
                            (next === char_l)
                            &&
                            (string_offset < next)
                        )
                        ? ((end = next),true)
                        : false
                    )
                ) {
                    if (rows_i >= rows_l) {
                        new_length = (rows_l + size_rows);
                        
                        for (;rows_l < new_length; rows_l++) {
                            rows.push(RowDefault(Row, rows_l, ROW_EL.cloneNode(true)));
                        };
                    };

                    if (tokens_i >= tokens_l) {
                        new_length = (tokens_l + size_tokens);
                        
                        for (;tokens_l < new_length; tokens_l++) {
                            tokens.push(TokenDefault(Token, tokens_l, TOKEN_EL.cloneNode(true)));
                        };
                    };

                    row = rows[rows_i++];
                    row_el = row.element;
                    inline = row_el.firstElementChild;
                    style = row_el.style;
                    style.top = `${style_top}px`;
                    style.left = `${element_left}px`;

                    t = tokens[tokens_i];

                    row.l = ((row.i = t.id) + 1);
                    
                    token_el = t.element;
                    t.row = row;
                    
                    node_text.textContent =
                    chunk =
                        string.substring((t.start=string_offset), (t.end=end));
                    
                    w = (TW.offsetWidth);
                    style.width = `${w}px`;
                    
                    max_width = (Math.max(max_width,w));
                    
                    token_el.replaceChildren(new Text(chunk));
                    inline.replaceChildren(token_el);

                    string_offset = next;

                    t.width = w;
                    t.height = h = TW.offsetHeight;

                    t.id = tokens_i++;

                    t.message = message;
                    t.block = block;

                    style_top = t.bottom = ((t.top = style_top) + h);
                    t.right = ((t.left = element_left) + w);
                };

                char_i = next;
            };

            message.tokens_l = tokens_i;
            
            i++;
        };

        if (rows_i > length_rows) {
            while (length_rows < rows_i) {
                fragment.appendChild(rows[length_rows++].element);
            };
            
            content.appendChild(fragment);
            A.length_rows = rows_i;
        }
        else if (rows_i < length_rows) {
            range.setStartBefore(rows[rows_i].element);
            range.setEndAfter(rows[length_rows - 1].element);
            range.deleteContents();
            A.length_rows = rows_i;
        }

        (tokens_i === length_tokens)
        ||
        (A.length_tokens = tokens_i);

        S.height_loaded_start = (style_top);
        S.height_loaded = (style_top - top_content);

        S.height_content = (style_top += (S.bottom_content));

        width_row = (S.width_row = ((S.width_loaded = max_width) + right_content));

        html_style.setProperty("--width-row", `${width_row}px`);
        
        html_style.setProperty("--height-content",`${style_top}px`);
        html_style.setProperty("--width-content", `${
            S.width_content = (
                (
                    S.width_loaded_start = (
                        max_width
                        + (element_left)
                    )
                )
                + (right_content)
            )    
        }px`);
    }
);
