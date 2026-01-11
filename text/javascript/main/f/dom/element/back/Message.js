

function Message(
    i,id,
    
    tokens_i,
    tokens_l,
    tokens_length,

    chat,
    block,
    
    offset,
    length,

    created,
    epoch,
) {
    this.i = i;
    this.id = id;
    
    this.tokens_i = tokens_i;
    this.tokens_l = tokens_l;
    this.tokens_length = tokens_length;
    
    this.chat = chat;
    this.block = block;

    this.offset = offset;
    this.length = length;
    
    this.created = created; 
    this.epoch = epoch;
};

Message.prototype = {
    default: (
        (Message, i, id) => {
            var n = null;
            return (
                new Message(
                    i,id,
                    0,0,0,
                    n,n,
                    0,0,
                    0,0,
                )
            )
        }
    )
};

export default Message;
