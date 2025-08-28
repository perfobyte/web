import {join, } from 'path';
import { readFileSync, createReadStream, statSync, existsSync } from 'fs';
import {send_file, within_frame, stream_file, to_index, cut_to, file_size, route_value} from './f/i.js';

import {path_files,F} from "#var";
import html from 'nunjucks';


export default (
    (mode) => {
        var
            r_data = {
                mode,
            },
            dev = mode === 0,

            file_v = (
                dev
                ? (
                    (route) => {
                        var v = route.v;
                        return (
                            (route.r)
                            &&
                            (route.l=Buffer.byteLength((v=Buffer.from(html.renderString(v.toString(), r_data))), 'utf8')),

                            v
                        );
                    }
                )
                : route_value
            )
        ;
        return (
            (q,s) => {
                var
                    u = q.url,

                    U = u.substring(0,to_index(u.indexOf("?"))),

                    p = "",
                    fp = "",
                    route = null
                ;
                console.log(U);

                return (
                    U.startsWith("/f/")
                    ? (
                        existsSync(fp = join(F, (p = U.substring(3))))
                        ? stream_file(s,fp,cut_to(p,to_index(within_frame(p,"/"))),file_size(fp))
                        : s.writeHead(404).end()
                    )
                    :
                    send_file(
                        s,
                        (route=path_files[U]).t,
                        file_v(route),
                        route.l,
                    )
                );
            }
        )
    }
)