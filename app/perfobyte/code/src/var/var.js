
import {readFileSync} from 'fs';
import {join} from 'path';

export var
    cwd = process.cwd(),
    F = join(cwd, "f"),
    main = (join(cwd, "./h/.html")),
    _404 = (join(cwd, "./h/404.html")),
    seo = (join(F, "./text/plain/robots.txt")),
    sw = (join(F, "./text/javascript/sw/i.js"))
;
