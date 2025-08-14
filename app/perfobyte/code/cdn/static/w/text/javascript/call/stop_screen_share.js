
import {cl_sh, b_dv_cl_sh_cl} from '../elems.js';
import {call, call_o, call_display }from '../state/i.js';
import {removeTrack, accept_track, stop} from '../media/f/i.js';

import {
    volume_stream,
    turn_camera,
    sender_tracks_reduce,
    stream_size,
    track_enabled_reduce,
    stream_to_peer,

    get_media_then,
    call_stop_screen_share,
    type_stream,
} from './i.js';


export default (
    (a) => (
        (e) => {
            return (
                get_media_then(call)
                .then(a)
            )
        }
    )
)(
    (new_s) => {
        var
            me = call.i,
            s = call.s,

            prev_tracks = s.getTracks(),
            new_tracks = new_s.getTracks(),

            tc_i = call.tc_i,

            _2 = (tc_i === 2)
        ;
        return (
            prev_tracks.reduce(stop, s),
            new_tracks.reduce(removeTrack, new_s),

            new_tracks.reduce(accept_track, s),

            type_stream(s,tc_i),

            (
                me
                .getSenders()
                .reduce(
                    sender_tracks_reduce,
                    s.getTracks()
                )
            ),
            (call_display.v = false),

            _2
            ? b_dv_cl_sh_cl.remove("to")
            : cl_sh.remove("st")
        );
    }
);
