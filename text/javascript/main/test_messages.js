import {blocks} from './conf/i.js';

export default (blocks) => [
    {
        start: 0,
        end: 62,
        id: 0n,
        created: 0,
        epoch: 0,
        block:blocks[0],
    },
    {
        start: 62,
        end: 89,
        id: 1n,
        created: 1,
        epoch: 0,
        block:blocks[0],
    },
    {
        start: 89,
        end: 99,
        id: 3n,
        created: 2,
        epoch: 0,
        block:blocks[0],
    },
    {
        start: 99,
        end: 311,
        id: 4n,
        created: 3, 
        epoch: 0,
        block:blocks[0],
    },
    {
        start: 311,
        end: 509,
        id: 5n,
        created: 4,
        epoch: 0,
        block:blocks[0],
    },
    {
        start: 509,
        end: 4096,
        id: 6n,
        created: 5,
        epoch: 0,
        block:blocks[0],
    },
    {
        start: 4096,
        end: 4100,
        id: 7n,
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
        view.setBigUint64(f+8, m.id, true);

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