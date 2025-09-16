import {readVarint} from "./i.js";

export default (
    (buf, pos) => {
        var
            _ = readVarint(buf, pos),
            len = _[0],
            next = _[1]
        ;
        return [
            len,
            next,
            next + len
        ];
    }
)