import {note} from '../../../state/i.js';

export default (
    (w) => {
        var
            a = (
                () => (
                    w.removeEventListener("mouseup",a),
                    
                    (note.s=false),
                    note.r?.stop()
                )
            )
        ;
        return a;
    }
)(window);
