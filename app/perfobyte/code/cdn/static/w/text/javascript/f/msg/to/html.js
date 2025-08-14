import escape_html from '../../escape_html.js';
import {msg_rows_reduce} from '../../../reduce/i.js';


export default (
    (s,id,rows) => {
        var
            i = 0,
            
            l = s.length,
            v = "",
            c = ""
        ;

        if (rows > 1) {
            v = `<div data-a="${id}" class="f"><span>`;

            i = 0;
            l = s.lastIndexOf("\n");
            
            for(;i<l;i++) {
                v += (
                    ((c = s[i]) === "\n")
                    ? `</div><div data-a="${id}" class="i"><span>`
                    : escape_html(c)
                );
            };
            v += `</span></div><div data-a="${id}" class="l"><span>${s.substring(1+l)}</span></div>`
        }
        else {
            v = `<div data-a="${id}" class="o"><span>${Array.from(s, escape_html).join("")}</span></div>`;
        };

        return (
            v
        );
    }
)