import {createReadStream} from 'fs';


export default (
    (s,fp,ct,size) => {
        return (
            createReadStream(fp)
            .pipe(
                s
                .setHeader("Content-Type",ct)
                .setHeader("Content-Length",size.toString())
                .writeHead(200)
            )
        )
    }
)