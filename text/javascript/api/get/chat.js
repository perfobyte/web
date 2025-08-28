import get_chats from './chats/_.js';

export default (
    (inner_id) => {
        return (
            get_chats(
                                
            )[
                inner_id
            ]
        );
    }
)