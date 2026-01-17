import {string_value} from '../f/i.js';

function Message(
    i,id,
    
    tokens_i,
    tokens_l,
    
    chat,
    block,
    
    start,
    end,

    created,
    epoch,
) {
    this.i = i;
    this.id = id;
    
    this.tokens_i = tokens_i;
    this.tokens_l = tokens_l;
    
    this.chat = chat;
    this.block = block;

    this.start = start;
    this.end = end;
    
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
                    0,0,
                    n,n,
                    0,0,
                    0,0,
                )
            )
        }
    ),
    
    string_value,
};

export default Message;
