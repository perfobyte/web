import get_msgs from './_.js';


export default (
    (chat_id) => {
        return (
            get_msgs(chat_id)
            .length
        );
    }
)