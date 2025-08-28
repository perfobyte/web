

var
    webkit = fork(khtml),

    blink = fork(webkit),
    
    chromium = browser_kernel(blink),

    qt_web_engine = use(blink),

    browsers = [
        chromium([
            chrome,
            edge,
            opera,
            brave,
            vivaldi,
            samsung_internet,
        ]),

        gecko([
            firefox,
            waterfox,
            pale_moon,
            sea_monkey,
        ]),

        webkit([
            safari,
            epiphany,
            midori,
        ]),

        qt_web_engine([
            falkon,
        ]),

        edge_html([
            old(edge),
        ]),

        trident([
            internet_explorer,
        ]),

        servo,

        khtml([
            konqueror,
        ]),
    ]
;
