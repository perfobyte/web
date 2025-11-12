import escape_html from '../../escape_html.js';

// TODO: finish it

export default (
    (s,id,rows,ul, msg_el, template, msg_v_el) => {
        var
            i = 0,
            
            l = 0,
            v = "",
            c = "",

            el = null,
            cl = null,
            span = null
        ;
        template.setAttribute("data-a",id);

        if (rows > 1) {
            
            span = msg_v_el(el = msg_el(template.cloneNode(true), "f"));
            
            i = 0;
            l = s.lastIndexOf("\n");
            
            for(;i<l;i++) {
                
                ((c = s[i]) === "\n")
                ? (
                    (span.textContent = v),
                    ul.appendChild(el),
                    (span = msg_v_el(el = msg_el(template.cloneNode(true), "i")))
                )
                : (v += escape_html(c))
            };
            
            span.textContent = v;
            ul.appendChild(el);
            
            (msg_v_el(el = msg_el(template.cloneNode(true), "l")))
            .textContent =
                s.substring(1+l);
            ul.appendChild(el);
        }
        else {
            msg_v_el(
                el = msg_el(template, "o")
            )
            .textContent =
                Array.from(s, escape_html).join("")
            ;

            ul.appendChild(el);
        };

        return undefined;
    }
)