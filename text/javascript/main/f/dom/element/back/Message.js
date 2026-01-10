

function Message(
    id,

    chat,
    block,
    
    offset,
    length,

    created,
    epoch,
) {
    this.id = id;
    
    this.chat = chat;
    this.block = block;

    this.offset = offset;
    this.length = length;
    
    this.created = created; 
    this.epoch = epoch;
};

Message.prototype = {
    default: (
        (Message, id) => {
            var n = null;
            return (
                new Message(
                    id,
                    n,n,
                    0,0,
                    0,0,
                )
            )
        }
    )
};

export default Message;
