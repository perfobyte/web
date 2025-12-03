
tag_types = {
    0: 'line'
};

messages container {
    [messages_length][message: (
        [message_data: id, time ][tags_length][content_length][ [tag_type][type_tags_length][ [from, to] ] ][content]
    )];
};

(file=chat) {
    meta {
        length: [
            0,// tags
            0,// messages
        ],

        value_size: [
            [
                {
                    id:0,
                    size:8,
                    key:"id",
                },
                {
                    id:1,
                    size:8,
                    key:"from",
                },
                {
                    id:2,
                    size:8,
                    key:"to",
                },
            ],
            [
                {
                    id: 0,
                    size: 8,
                    key: "id",
                },
                {
                    id: 1,
                    size: 8,
                    key: "time"
                }
            ]
        ],

    };

    tables {
        0 (tags) {
            [tag_type][type_tags_length][ [from, to] ]
        }
        1 (messages) {
            [id, time]
        }
    };
    
    content {
        0: message,
    };
}


export default [
    {
        "id": 0,
        "lines": [
            [
                0,
                5
            ],
            [
                5,
                328
            ]
        ]
    },
    {
        "id": 1,
        "lines": [
            [
                328,
                339
            ]
        ]
    },
    {
        "id": 2,
        "lines": [
            [
                339,
                344
            ]
        ]
    },
    {
        "id": 3,
        "lines": [
            [
                344,
                350
            ]
        ]
    },
    {
        "id": 4,
        "lines": [
            [
                350,
                358
            ]
        ]
    },
    {
        "id": 5,
        "lines": [
            [
                358,
                363
            ],
            [
                363,
                686
            ]
        ]
    },
    {
        "id": 6,
        "lines": [
            [
                686,
                697
            ]
        ]
    },
    {
        "id": 7,
        "lines": [
            [
                697,
                702
            ]
        ]
    },
    {
        "id": 8,
        "lines": [
            [
                702,
                708
            ]
        ]
    },
    {
        "id": 9,
        "lines": [
            [
                708,
                716
            ]
        ]
    },
    {
        "id": 10,
        "lines": [
            [
                716,
                721
            ],
            [
                721,
                1044
            ]
        ]
    },
    {
        "id": 11,
        "lines": [
            [
                1044,
                1055
            ]
        ]
    },
    {
        "id": 12,
        "lines": [
            [
                1055,
                1060
            ]
        ]
    },
    {
        "id": 13,
        "lines": [
            [
                1060,
                1066
            ]
        ]
    },
    {
        "id": 14,
        "lines": [
            [
                1066,
                1074
            ]
        ]
    },
    {
        "id": 15,
        "lines": [
            [
                1074,
                1079
            ],
            [
                1079,
                1402
            ]
        ]
    },
    {
        "id": 16,
        "lines": [
            [
                1402,
                1413
            ]
        ]
    },
    {
        "id": 17,
        "lines": [
            [
                1413,
                1418
            ]
        ]
    },
    {
        "id": 18,
        "lines": [
            [
                1418,
                1424
            ]
        ]
    },
    {
        "id": 19,
        "lines": [
            [
                1424,
                1432
            ]
        ]
    },
    {
        "id": 20,
        "lines": [
            [
                1432,
                1437
            ],
            [
                1437,
                1760
            ]
        ]
    },
    {
        "id": 21,
        "lines": [
            [
                1760,
                1771
            ]
        ]
    },
    {
        "id": 22,
        "lines": [
            [
                1771,
                1776
            ]
        ]
    },
    {
        "id": 23,
        "lines": [
            [
                1776,
                1782
            ]
        ]
    },
    {
        "id": 24,
        "lines": [
            [
                1782,
                1790
            ]
        ]
    },
    {
        "id": 25,
        "lines": [
            [
                1790,
                1795
            ],
            [
                1795,
                2118
            ]
        ]
    },
    {
        "id": 26,
        "lines": [
            [
                2118,
                2129
            ]
        ]
    },
    {
        "id": 27,
        "lines": [
            [
                2129,
                2134
            ]
        ]
    },
    {
        "id": 28,
        "lines": [
            [
                2134,
                2140
            ]
        ]
    },
    {
        "id": 29,
        "lines": [
            [
                2140,
                2148
            ]
        ]
    },
    {
        "id": 30,
        "lines": [
            [
                2148,
                2153
            ],
            [
                2153,
                2158
            ]
        ]
    },
    {
        "id": 31,
        "lines": [
            [
                2158,
                2169
            ]
        ]
    },
    {
        "id": 32,
        "lines": [
            [
                2169,
                2174
            ]
        ]
    },
    {
        "id": 33,
        "lines": [
            [
                2174,
                2180
            ]
        ]
    },
    {
        "id": 34,
        "lines": [
            [
                2180,
                2188
            ]
        ]
    },
    {
        "id": 35,
        "lines": [
            [
                2188,
                2193
            ],
            [
                2193,
                2198
            ]
        ]
    },
    {
        "id": 36,
        "lines": [
            [
                2198,
                2209
            ]
        ]
    },
    {
        "id": 37,
        "lines": [
            [
                2209,
                2214
            ]
        ]
    },
    {
        "id": 38,
        "lines": [
            [
                2214,
                2220
            ]
        ]
    },
    {
        "id": 39,
        "lines": [
            [
                2220,
                2228
            ]
        ]
    },
    {
        "id": 40,
        "lines": [
            [
                2228,
                2233
            ],
            [
                2233,
                2238
            ]
        ]
    },
    {
        "id": 41,
        "lines": [
            [
                2238,
                2249
            ]
        ]
    },
    {
        "id": 42,
        "lines": [
            [
                2249,
                2254
            ]
        ]
    },
    {
        "id": 43,
        "lines": [
            [
                2254,
                2260
            ]
        ]
    },
    {
        "id": 44,
        "lines": [
            [
                2260,
                2268
            ]
        ]
    },
    {
        "id": 45,
        "lines": [
            [
                2268,
                2273
            ],
            [
                2273,
                2278
            ]
        ]
    },
    {
        "id": 46,
        "lines": [
            [
                2278,
                2289
            ]
        ]
    },
    {
        "id": 47,
        "lines": [
            [
                2289,
                2294
            ]
        ]
    },
    {
        "id": 48,
        "lines": [
            [
                2294,
                2300
            ]
        ]
    },
    {
        "id": 49,
        "lines": [
            [
                2300,
                2308
            ]
        ]
    }
];

