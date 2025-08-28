import {writeFileSync} from 'fs';


export default (
    (s,t,v,l) => {
        return (
            s
            .setHeader("Content-Type", t)
            .setHeader("Content-Length", l)
            .writeHead(200)
            .end(v)
        )
    }
)