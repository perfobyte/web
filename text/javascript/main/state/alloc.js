
length_// message_length <= block;

export default (
    () => {
        var
            size_block = 4096,
            number_blocks = 1,
            i = 0,
            

            size_blocks = (
                size_block
                * number_blocks
            ),

            size_tags = size_blocks,

            blocks = (
                Array(number_blocks)
                .fill(null)
            ),

            

            tags = (
                Array(size_tags).fill(0)
            ),
            
            blocks_buffer = (
                new SharedArrayBuffer(
                    size_blocks
                )
            ),

            size_ram = 8083100,

            size_memory_page = 4096,
            size_cpu_cache_line = 64,

            test_tags = [
                1,
                0,
                5,
                328,
                339,
                344,
                350,
                358,
                363,
                686,
                697,
                702,
                708,
                716,
                721,
                1044,
                1055,
                1060,
                1066,
                1074,
                1079,
                1402,
                1413,
                1418,
                1424,
                1432,
                1437,
                1760,
                1771,
                1776,
                1782,
                1790,
                1795,
                2118,
                2129,
                2134,
                2140,
                2148,
                2153,
                2158,
                2169,
                2174,
                2180,
                2188,
                2193,
                2198,
                2209,
                2214,
                2220,
                2228,
                2233,
                2238,
                2249,
                2254,
                2260,
                2268,
                2273,
                2278,
                2289,
                2294,
                2300,
                2308,
            ]
        ;

        blocks[i] = {
            id: 0,
            value: "helloworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф11111111111sooo?123123why waithelloworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф11111111111sooo?123123why waithelloworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф11111111111sooo?123123why waithelloworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф11111111111sooo?123123why waithelloworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф11111111111sooo?123123why waithelloworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф11111111111sooo?123123why waithelloworld11111111111sooo?123123why waithelloworld11111111111sooo?123123why waithelloworld11111111111sooo?123123why waithelloworld11111111111sooo?123123why wait",
        };

        
        test_tags
        .reduce((tags, v, i) => {
            tags[i] = v;
            return tags;
        }, tags);
        
        return {
            size_memory_page,
            size_cpu_cache_line,
            size_block,
            size_ram,
            size_tags,
            
            number_blocks,
            number_cpu_cache_lines: [
                131072,
                131072,
                1048576,
                3145728,
            ],
            number_memory_pages: (size_ram / size_memory_page),

            length_tags: 

            blocks,
            tags,
            length_allocated_tags,

            blocks_buffer,
            blocks_buffer_view: (new Uint8Array(blocks_buffer)),
        }
    }
);
