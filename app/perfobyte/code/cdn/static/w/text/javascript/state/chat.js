import * as f from './chat_f/i.js';


export default (() => {
    function a() {
        this.i = -1;
        this.msgs = new Map(); // TODO:

        this.t = 0;

        this.sl = -1;
        this.last_t = 0;
        this.loaded = 0;

        this.v = "";
        this.tv = "";
    }
    a.prototype = f;
    return new a();
})();
