import {call_play,call} from "../state/i.js";

export default (
    (w) => {
        var 
            mouseup = (
                (e) => {
                    var
                        t = e.currentTarget
                    ;
                    return (
                        e.preventDefault(),

                        t.addEventListener("mouseup", mouseup),
                        (call_play[call.tc_i][0].muted = true)
                    );
                }
            )
        ;
        return (
            (e) => {
                return (
                    (e.button === 2)
                    &&
                    (
                        e.preventDefault(),
                        e.stopPropagation(),

                        w.addEventListener("mouseup", mouseup),
                        (call_play[call.tc_i][0].muted = false)
                    )
                )
            }
        );
    }
)(
    window
);