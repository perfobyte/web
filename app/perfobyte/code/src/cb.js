import {join, } from 'path';
import { readFileSync, createReadStream, statSync, existsSync } from 'fs';
import {send_file, within_frame, stream_file, to_index, cut_to, file_size, route_value} from './f/i.js';

import {path_files,F} from "#var";

import {minify} from "html-minifier";
import {render as swig_render} from 'swig-templates';




export default (
    (mode) => {
        var
            html_minify_conf = {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
            },
            r_data = {
                locals: {
                    mode,
                }
            },
            dev = mode === 0
        ;
        return (
            (q,s) => {
                var
                    u = q.url,

                    U = u.substring(0,to_index(u.indexOf("?"))),

                    p = "",
                    fp = "",
                    route = null,
                    _ = null
                ;
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

                        (route=path_files[U])
                        .t,

                        (
                            _ = Buffer.from(minify(
                                swig_render(
                                    readFileSync(route.v).toString(),
                                    r_data
                                ),
                                html_minify_conf
                            ))
                        ),

                        (_.byteLength),
                    )
                );
            }
        )
    }
)