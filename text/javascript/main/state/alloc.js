import {array_unumber_update, array_unumber_constructor, Block} from "../f/i.js";
import test_messages from './test_messages.js';


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
            
            size_blocks = (size_block * number_blocks),
            size_message_blocks = (size_block * number_message_blocks),

            size_tokens = size_block,
            size_rows = size_block,

            buffer_request = (
                new SharedArrayBuffer(
                    number_blocks * 8
                )
            ),
            buffer_request_view = new DataView(buffer_request),
            
            blocks = Array(size_blocks).fill(null),
            buffer_blocks = new SharedArrayBuffer(size_blocks),
            buffer_blocks_view = new DataView(buffer_blocks),

            buffer_messages = new SharedArrayBuffer(size_message_blocks),
            buffer_messages_view = new DataView(buffer_messages),

            number_memory_pages = (size_ram / size_memory_page),

            size_message = 64,

            messages = (
                test_messages
            ),

            length_messages = (messages.length),

            test_value = "hello_my_friend\nhow are u bro\n i havent seen u a long time agosdfldsfkdsfksdfksdfsdf\\cwaitaaaa\naaaaai havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdf11\n2\n3\n4\n3553345435345345345534534\nx312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123\nhello/world//////",

            test_block = new Block(0, 0, test_value),
            size_cursors = 1,

            size_selections = size_cursors,
            size_selection_blocks = size_tokens,
            size_selection_groups = size_tokens,

            length_selections = 0,
            length_selection_blocks = 0,
            length_selection_groups = 0
        ;
        
        Block.prototype.size = size_block;
        
        blocks[0] = test_block;

        messages.forEach((m) => {
            m.block = test_block;
        });
        
        return {
            value_is_endian_little: true,

            size_memory_page,
            size_cpu_cache_line,
            size_block,
            size_ram,
            size_message,

            size_rows,
            size_tokens,
            size_cursors,
            size_inputs:1,
            size_textareas:1,

            size_selection_blocks,
            size_selection_groups,
            size_selections,

            number_blocks,
            number_message_blocks,
            number_cpu_cache_lines,
            number_memory_pages,

            offset_blocks:0,
            offset_messages:0,

            length_messages,

            length_rows:0,
            length_tokens:0,
            length_cursors:1,
            length_inputs:1,
            length_textareas:1,

            length_selections:0,
            length_selection_blocks:0,
            length_selection_groups:0,
            
            buffer_messages,
            buffer_messages_view,

            buffer_blocks,
            buffer_blocks_view,

            blocks,
            messages,
        }
    }
)(
    
);
