

export default (
    (Uint8Array) => {
        var
            max_length = 4096
        ;
        return {
            selected: 0,
            max_length,
            buffer: new Uint8Array(max_length),
        }
    }
)(globalThis.Uint8Array);
