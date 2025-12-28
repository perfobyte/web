import {array_unumber_update, array_unumber_constructor} from "../f/i.js";

export default (
    () => {
        var
            size_block = 4096,
            size_ram = 8083100,
            size_memory_page = 4096,
            size_cpu_cache_line = 64,
            number_cpu_cache_lines = [
                131072,
                131072,
                1048576,
                3145728,
            ],
            
            number_blocks = 1,
            number_message_blocks = 1,
            value_le = true,

            size_blocks = (size_block * number_blocks),
            size_message_blocks = (size_block * number_message_blocks),

            size_elements = size_block,

            blocks = Array(number_blocks).fill(""),

            buffer_request = (
                new SharedArrayBuffer(
                    number_blocks * 8
                )
            ),
            buffer_request_view = new DataView(buffer_request),
            
            buffer_blocks = new SharedArrayBuffer(size_blocks),
            buffer_blocks_view = new DataView(buffer_blocks),

            buffer_messages = new SharedArrayBuffer(size_message_blocks),
            buffer_messages_view = new DataView(buffer_messages),

            offset_blocks = 0,

            number_memory_pages = (size_ram / size_memory_page),

            size_message = 64,
            length_messages = (5 * size_message),

            string_block = ""
        ;

        string_block = "hello_my_friend\nhow are u bro\n i havent seen u a long time agosdfldsfkdsfksdfksdfsdf\\cwaitaaaa\naaaaai havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdf11\n2\n3\n4\n3553345435345345345534534\nx312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123\nhello/world//////";
        
        [
            { chat_id: 0n, block_id: 0, offset: 0,   length: 62,  id: 0n, timestamp: 0n },
            { chat_id: 0n, block_id: 0, offset: 63,  length: 27,  id: 1n, timestamp: 1n },
            { chat_id: 0n, block_id: 0, offset: 90,  length: 10,  id: 3n, timestamp: 2n }, // 91 -> 90
            { chat_id: 0n, block_id: 0, offset: 100, length: 212, id: 4n, timestamp: 3n }, // 101 -> 100
            { chat_id: 0n, block_id: 0, offset: 312, length: 197, id: 5n, timestamp: 4n }, // 313 -> 312 ✅ now starts with "1"
        ]
        .reduce(
            (view, message, index) => {
                var f = (index * size_message);
                return (
                    view.setBigUint64(f, message.chat_id, true),
                    view.setUint32(f+8, message.block_id, true),
                    view.setUint16(f+12, message.offset, true),
                    view.setUint16(f+14, message.length, true),
                    view.setBigUint64(f+16, message.id, true),
                    view.setBigUint64(f+24, message.timestamp, true),

                    view
                );
            },
            buffer_messages_view,
        );

        return {
            value_le,

            size_memory_page,
            size_cpu_cache_line,
            size_block,
            size_ram,
            size_elements,

            size_message,

            offset_blocks,
            number_blocks,
            number_message_blocks,

            number_cpu_cache_lines,
            number_memory_pages,

            length_loaded_elements:0,
            
            blocks,

            buffer_messages,
            buffer_messages_view,
            
            offset_messages:0,
            length_messages,

            string_block,
            offset_string_block:0,

            buffer_blocks,
            buffer_blocks_view,
        }
    }
)(
    
);
