import {_404,main,sw,seo,} from './var.js';

export default (
    new Proxy(
        {
            "/404":{
                v:_404,
                t:"text/html",
                r:false,
            },
            "/": {
                v:main,
                t:"text/html",
                r:true,
            },
            "/s": {
                v:sw,
                t:"text/javascript",
                r:false,
            },
            "/robots.txt": {
                v:seo,
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
