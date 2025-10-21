

(
    (r,sw) => {
        var
            R = null,
            n = "v1",
            f = [
                '/',
                '/about',
                '/policies',
            ],
            c = [
                (p) => {
                    console.dir(p)
                }
            ]
        ;
        return (
            (r.onerror = (e) => console.error(e.target.error)),
            (r.onupgradeneeded = (
                (e) => {
                    var
                        d = e.target.result,
                        s = d.objectStoreNames,
                        K = {
                            keyPath: 'a',
                            autoIncrement: true
                        },
                        _ = { unique: false },
                        st = null
                    ;
                    return (
                        s.contains('c')
                        ||
                        (
                            (st = d.createObjectStore('c', K))
                            .createIndex("n", "n", _),
                            
                            st
                            .createIndex("a","a",_)
                        )
                    );
                }
            )),
            (r.onsuccess = (
                (e) => (
                    R = e.target.result
                )
            )),

            self
            .addEventListener(
                'message',
                (e) => {
                    var d = e.data;
                    return (
                        c[d.type](d.payload)
                    );
                }
            ),

            self
            .addEventListener(
                'install',
                function(e) {
                    return (
                        this.skipWaiting(),
                        e.waitUntil(
                            caches
                            .open(n)
                            .then((c) => c.addAll(f))
                        )
                    );
                }
            ),

            self
            .addEventListener(
                'activate',
                (e) => (
                    clients.claim(),
                    e.waitUntil(
                        caches
                        .keys()
                        .then((k) => (
                            Promise.all(
                                k.map((k) => (
                                    (k === n)
                                    ? null
                                    : caches.delete(k)
                                ))
                            )
                        ))
                    )
                )
            ),

            self
            .addEventListener(
                'fetch',
                (e) => (
                    e.respondWith(
                        fetch(e.request)
                    )
                )
            ),

            console.log("deployed")
        );
    }
)(
    indexedDB.open('a', 1),
);


