

function Chat(
    id,
) {
    this.id = id;
};

Chat.prototype = {
    default: (
        (Chat) => {
            return (
                new Chat(0n)
            )
        }
    ),

    setup(id) {
        this.id = id;
    }
};

export default Chat;
