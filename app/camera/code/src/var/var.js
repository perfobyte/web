
import {readFileSync} from 'fs';
import {join} from 'path';

export var
    cwd = process.cwd(),
    F = join(cwd, 'f'),
    main = readFileSync(join(cwd, "./h/.html")),
    _404 = readFileSync(join(cwd, "./h/404.html")),
    seo = readFileSync(join(cwd, "./f/text/plain/robots.txt")),
    sw = readFileSync(join(cwd, "./f/text/javascript/sw.js"))
;
