
/*

"[tag_types_length][tag_types][tags_lengths][tags_offsets]"

var
    same = (v) => (v),

    to_number = {
        1: same,
        2: same,
        4: same,
        8: BigInt,
    },

    array = {
        1: Uint8Array,
        2: Uint16Array,
        4: Uint32Array,
        8: BigUint64Array,
    }
;

[
    [amount]
    [tag_types]
    [tags_length]
    [tags_data]
];

*/
