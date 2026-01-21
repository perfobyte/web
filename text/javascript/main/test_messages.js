import {blocks} from './conf/i.js';

export default (blocks) => [
    {
        id: 0n,
        index: 0,
        start: 0,
        end: 62,
        created: 0,
        epoch: 0,
        block:blocks[0],
    },
    {
        id: 1n,
        index: 1,
        start: 62,
        end: 89,
        created: 1,
        epoch: 0,
        block:blocks[0],
    },
    {
        id: 2n,
        index: 2,
        start: 89,
        end: 99,
        created: 2,
        epoch: 0,
        block:blocks[0],
    },
    {
        id: 3n,
        index: 3,
        start: 99,
        end: 311,
        created: 3, 
        epoch: 0,
        block:blocks[0],
    },
    {
        id: 4n,
        index: 4,
        start: 311,
        end: 509,
        created: 4,
        epoch: 0,
        block:blocks[0],
    },
    {
        id: 5n,
        index: 5,
        start: 509,
        end: 4096,
        created: 5,
        epoch: 0,
        block:blocks[0],
    },
    {
        id: 6n,
        index: 6,
        start: 4096,
        end: 4100,
        created: 6,
        epoch: 0,
        block: blocks[1],
    },
];

/*

messages
.reduce(
    (view, m, index) => {
        var
            f = (index * size_message)
        ;
        
        view.setBigUint64(f, m.id_chat, true);
        view.setBigUint64(f+8, m.index, true);

        view.setUint32(f+16, m.id_block, true);

        view.setUint16(f+20, m.offset, true);
        view.setUint16(f+22, m.length, true);
        
        view.setUint32(f+24, m.created, true);
        view.setUint32(f+28, m.epoch, true);

        return view;
    },
    buffer_messages_view,
);

*/