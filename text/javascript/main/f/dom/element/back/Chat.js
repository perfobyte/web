

function Chat(
    id,
) {
    this.id = id;
};

Chat.prototype = {
    default: (
        (Chat, id) => {
            return (
                new Chat(
                    id
                )
            )
        }
    )
};

export default Chat;
