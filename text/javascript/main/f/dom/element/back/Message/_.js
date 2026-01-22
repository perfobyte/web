import f from './f/i.js';

function Message(
    index,

    chat,
    block,
    
    tokens_i,
    tokens_l,

    start,
    end,

    created,
    epoch,
) {
    this.index = index;
    
    this.chat = chat;
    this.block = block;
    
    this.tokens_i = tokens_i;
    this.tokens_l = tokens_l;
    
    this.start = start;
    this.end = end;
    
    this.created = created; 
    this.epoch = epoch;
};

Message.prototype = f;

export default Message;
