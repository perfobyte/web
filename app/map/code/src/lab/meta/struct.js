* [
    StringTable = String[] where each element has different length,
]


file [
    HeaderBlock [...],

    PrimitiveBlock[] [
        granularity, lat_offset, lon_offset, date_granularity,
        StringTable [...],
        primitivegroup[] [
            PrimitiveGroup [
                nodes[] [ Node [...] ],
                dense [
                    DenseNodes [...]
                ],
                ways[] [ Way [...] ],
                relations[] [ Relation [...] ],
                changesets[] [ ChangeSet [...] ]
            ]
        ]
    ]
]
