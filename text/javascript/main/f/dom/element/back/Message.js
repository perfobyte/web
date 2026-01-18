import {string_value} from '../f/i.js';

function Message(
    id,i,

    chat,
    block,
    
    tokens_i,
    tokens_l,

    start,
    end,

    created,
    epoch,
) {
    this.id = id;
    this.i = i;
    
    this.chat = chat;
    this.block = block;
    
    this.tokens_i = tokens_i;
    this.tokens_l = tokens_l;
    
    this.start = start;
    this.end = end;
    
    this.created = created; 
    this.epoch = epoch;
};

Message.prototype = {
    default: (
        (Message, id, i) => {
            var n = null;
            return (
                new Message(
                    id,i,
                    n,n,
                    0,0,
                    0,0,
                    0,0,
                )
            )
        }
    ),
    
    string_value,
};

export default Message;
