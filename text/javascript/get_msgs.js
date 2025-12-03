import {count_char, message_split} from './f/i.js';

export default (
    (chat_id) => {
        return (
            ((time) => [
                {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф", time:time-1_000_000_000},
                {value:"11111111111", time:time-10_000},
                {value:"sooo?", time:time-8_000},
                {value:"123123", time:time-6_000},
                {value:"why wait", time:time-4_000},

                {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф", time:time-1_000_000_000},
                {value:"11111111111", time:time-10_000},
                {value:"sooo?", time:time-8_000},
                {value:"123123", time:time-6_000},
                {value:"why wait", time:time-4_000},

                {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф", time:time-1_000_000_000},
                {value:"11111111111", time:time-10_000},
                {value:"sooo?", time:time-8_000},
                {value:"123123", time:time-6_000},
                {value:"why wait", time:time-4_000},

                {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф", time:time-1_000_000_000},
                {value:"11111111111", time:time-10_000},
                {value:"sooo?", time:time-8_000},
                {value:"123123", time:time-6_000},
                {value:"why wait", time:time-4_000},

                {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф", time:time-1_000_000_000},
                {value:"11111111111", time:time-10_000},
                {value:"sooo?", time:time-8_000},
                {value:"123123", time:time-6_000},
                {value:"why wait", time:time-4_000},

                {value:"hello\nworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыфnworldыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыфыф", time:time-1_000_000_000},
                {value:"11111111111", time:time-10_000},
                {value:"sooo?", time:time-8_000},
                {value:"123123", time:time-6_000},
                {value:"why wait", time:time-4_000},
                
                {value:"hello\nworld", time},
                {value:"11111111111", time},
                {value:"sooo?", time},
                {value:"123123", time},
                {value:"why wait", time},
                {value:"hello\nworld", time},
                {value:"11111111111", time},
                {value:"sooo?", time},
                {value:"123123", time},
                {value:"why wait", time},
                {value:"hello\nworld", time},
                {value:"11111111111", time},
                {value:"sooo?", time},
                {value:"123123", time},
                {value:"why wait", time},
                {value:"hello\nworld", time},
                {value:"11111111111", time},
                {value:"sooo?", time},
                {value:"123123", time},
                {value:"why wait", time},
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
            ))(Date.now())
        );
    }
)