import escape_html from '../../escape_html.js';

// TODO: finish it

export default (
    (src,id,rows,list,template) => {
        var
            i = 0,
            
            l = 0,
            v = "",
            c = "",

            el = null,
            span = null
        ;

        template.setAttribute("data-a",id);

        if (rows > 1) {

            
            span = (
                (el = template.cloneNode(true))
                .firstElementChild
            );

            el.className = "f";

            i = 0;
            l = src.lastIndexOf("\n");
            
            while(i<l) {
                ((c = src[i++]) === "\n")
                ? (
                    (span.textContent = v),
                    list.appendChild(el),

                    (span = (
                        (el = template.cloneNode(true))
                        .firstElementChild
                    )),

                    (el.className = "i")
                )
                : (v += c);
            };
            
            span.textContent = v;
            list.appendChild(el);

            (el = template.cloneNode(true))
            .className = "l";

            el.firstElementChild.textContent = src.substring(l+1);
            list.appendChild(el);
        }
        else {
            template.className = 'o';

            template
            .firstElementChild.textContent = src;

            list.appendChild(template);
        };
        

        return list;
    }
)