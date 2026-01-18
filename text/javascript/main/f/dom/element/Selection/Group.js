

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
        (constructor) => {
            var n = null;
            return (
                new constructor(
                    0,
                    n,
                    0,0
                )
            )
        }
    ),

    string_value: (
        function(sblocks, tokens) {
            var t = this;
            return (
                t.block.buffer.value.substring(
                    tokens[sblocks[t.i].i].start,
                    tokens[(sblocks[t.l-1].l)-1].end
                )
            );
        }
    ),
};

export default SelectionGroup;
