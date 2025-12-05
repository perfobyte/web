
// message_length <= block_length;



export default (
    () => {
        var
            block_length = 4096,
            block_number = 1,
            i = 0,

            blocks = Array(block_number).fill(null),
            blocks_buffer = new SharedArrayBuffer(block_length*block_number),

            worker = new Worker("/f/text/javascript/worker/fs/1.js")
        ;

        while (i < block_number) {
            blocks[i++] = {
                id: -1,
                value: ""
            };
        };
        
        return {
            block_length,
            block_length_size: 2,

            block_number,
            blocks,
            blocks_buffer,
            blocks_buffer_view:new Uint8Array(blocks_buffer),

            messages_lines: null,
            messages_dom: null,

            worker,
        }
    }
);
