import {_404,main,sw,seo,} from './var.js';

export default (
    new Proxy(
        {
            "/404":{
                v:_404,
                l: _404.length.toString(),
                t:"text/html",
                r:false,
            },
            "/": {
                v:main,
                l:main.length.toString(),
                t:"text/html",
                r:true,
            },
            "/s": {
                v:sw,
                l:sw.length.toString(),
                t:"text/javascript",
                r:false,
            },
            "/robots.txt": {
                v:seo,
                l:seo.length.toString(),
                t:"text/plain",
                r:false,
            },
        },
        {
            get: (t, k, r) => {
                return (
                    Object.hasOwn(t, k)
                    ? t[k]
                    : t["/404"]
                )
            }
        }
    )
);
