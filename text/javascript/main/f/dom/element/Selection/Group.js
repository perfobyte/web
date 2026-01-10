

function SelectionGroup(
    id,
    block,
    i,
    l
) {
    this.id = id;
    this.block = block;

    this.i = i;
    this.l = l;
};

SelectionGroup.prototype = {
    default: (
        (SelectionGroup, id) => {
            return (
                new SelectionGroup(
                    id,null,
                    0,0
                )
            )
        }
    ),

    string_value: (
        (sblocks, tokens, block_value, i,l) => {
            return (
                block_value.substring(
                    tokens[sblocks[i].i].start,
                    tokens[(sblocks[l-1].l)-1].end
                )
            );
        }
    ),
};

export default SelectionGroup;
