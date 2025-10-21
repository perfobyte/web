
export default (
    (chat_id) => {
        return (
            ((t) => [
                {v:"hello\nworld", t:t-1_000_000_000},
                {v:"11111111111", t:t-10_000},
                {v:"sooo?", t:t-8_000},
                {v:"123123", t:t-6_000},
                {v:"why wait", t:t-4_000},
                
                {v:"hello\nworld", t},
                {v:"11111111111", t},
                {v:"sooo?", t},
                {v:"123123", t},
                {v:"why wait", t},
                {v:"hello\nworld", t},
                {v:"11111111111", t},
                {v:"sooo?", t},
                {v:"123123", t},
                {v:"why wait", t},
                {v:"hello\nworld", t},
                {v:"11111111111", t},
                {v:"sooo?", t},
                {v:"123123", t},
                {v:"why wait", t},
                {v:"hello\nworld", t},
                {v:"11111111111", t},
                {v:"sooo?", t},
                {v:"123123", t},
                {v:"why wait", t},
            ])(Date.now())
        );
    }
)