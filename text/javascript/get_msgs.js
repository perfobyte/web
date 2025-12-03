import {count_char, message_split} from './f/i.js';

import content from './msgs_content.js';
import meta from './msgs_meta.js';


export default (
    (chat_id) => {
        
        return (
            ((time) => {
                var v = [
                    {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},

                    {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},

                    {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф",},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},

                    {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},

                    {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},

                    {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},
                    
                    {value:"hello\nworld"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},
                    {value:"hello\nworld"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},
                    {value:"hello\nworld"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},
                    {value:"hello\nworld"},
                    {value:"11111111111"},
                    {value:"sooo?"},
                    {value:"123123"},
                    {value:"why wait"},
                ]
                .map(
                    (m,id) => {
                        var
                            value = m.value,
                            rows = (
                                count_char(
                                    value,
                                    "\n",
                                    0,
                                    
                                    0,
                                    value.length
                                )
                                + 1
                            ),
                            lines_length = rows*2,
                            lines = (
                                Array(lines_length).fill(0)
                            )
                        ;
                        
                        message_split(
                            lines,value, "\n", 0,lines_length, 0,value.length
                        );

                        return {
                            ...m,
                            id,
                            lines,
                        };
                    }
                );
                console.dir();
                return v;
            })(Date.now())
        );
    }
)