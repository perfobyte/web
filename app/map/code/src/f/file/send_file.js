

export default (
    (s,t,v) => {
        return (
            s
            .setHeader("Content-Type", t)
            .setHeader("Content-Length", Buffer.byteLength(v))
            .writeHead(200)
            .end(v)
        );
    }
);
