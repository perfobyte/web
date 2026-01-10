

export default [
    {
        offset: 0,
        length: 62,
        id: 0n,
        created: 0,
        epoch: 0,
    },
    {
        offset: 62,
        length: 27,
        id: 1n,
        created: 1,
        epoch: 0,
    },
    {
        offset: 89,
        length: 10,
        id: 3n,
        created: 2,
        epoch: 0,
    },
    {
        offset: 99,
        length: 212,
        id: 4n,
        created: 3, 
        epoch: 0,
    },
    {
        offset: 311,
        length: 198,
        id: 5n,
        created: 4,
        epoch: 0,
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