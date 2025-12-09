import {test_tags, test_block_string} from './test.js';
import {array_unumber_update, array_unumber_constructor} from "../f/i.js";

export default (
    (
        size_block,
        size_ram,
        size_memory_page,
        size_cpu_cache_line,
        number_cpu_cache_lines,


        size_content_length,
        size_tags_length,

        size_tag_amount,
        size_tag_offsets_length,
        size_tag_id,
        size_tag_offset,
        
        number_blocks,
        value_le,
    ) => {
        var
            size_blocks = (size_block * number_blocks),
            size_elements = size_block,

            blocks = Array(number_blocks).fill(null),

            buffer_blocks = new SharedArrayBuffer(size_blocks),
            buffer_blocks_view = new DataView(buffer_blocks),

            test_block_content = new TextEncoder("utf8").encode(test_block_string),

            i = 0,

            pointer = 0,


            test_tags_byte_length = (size_tag_offset * test_tags.length),

            length_tags = (
                size_tags_length
                + size_tag_amount
                + size_tag_id
                + size_tag_offsets_length
                + test_tags_byte_length
            ),

            length_content = (
                size_content_length
                + test_block_content.byteLength
            )
        ;
        array_unumber_update[size_content_length](buffer_blocks_view, 0, 2308, value_le);
        
        new Uint8Array(
            buffer_blocks,
            size_content_length,
            test_block_content.byteLength
        )
        .set(test_block_content);


        console.log(
            length_content
            + length_tags
        );


        array_unumber_update[size_tags_length](buffer_blocks_view, (pointer = (size_block - size_tags_length)), (
            size_tag_amount
            + size_tag_id
            + size_tag_offsets_length
            + test_tags_byte_length
        ), value_le);
        
        pointer -= (size_tag_amount);
        array_unumber_update[size_tag_amount](buffer_blocks_view, (pointer), 1, value_le);

        array_unumber_update[size_tag_id](buffer_blocks_view, (pointer -= size_tag_id), 0, value_le);
        array_unumber_update[size_tag_offsets_length](
            buffer_blocks_view,
            (pointer -= size_tag_offsets_length),
            test_tags_byte_length,
            value_le
        );

        new (array_unumber_constructor[size_tag_offset])(
            buffer_blocks,
            (pointer -= (test_tags_byte_length * size_tag_offset)),
            (test_tags_byte_length)
        )
        .set(new array_unumber_constructor[size_tag_offset](test_tags));
        

        blocks[i] = {
            offset:0,
            id:0,
            value_content: test_block_string,
            
            length_content,
            length_tags,
            left: (
                size_block
                - (
                    length_content
                    + length_tags
                )
            ),
        };

        return {
            value_le,

            size_memory_page,
            size_cpu_cache_line,
            size_block,
            size_ram,
            size_elements,

            size_tag_offset,
            size_tag_amount,
            size_tag_id,
            size_content_length,
            size_tags_length,
            
            number_blocks,
            number_cpu_cache_lines,
            number_memory_pages: (size_ram / size_memory_page),

            length_loaded_elements:0,

            blocks,
            buffer_blocks,
            buffer_blocks_view,
        }
    }
)(
    4096,
    8083100,
    4096,
    64,
    [
        131072,
        131072,
        1048576,
        3145728,
    ],

    2,2,2,2,2,2,

    1,
    true,
);
