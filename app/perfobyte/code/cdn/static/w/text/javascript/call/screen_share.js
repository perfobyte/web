import {cl_sh, b_dv_cl_sh_cl} from '../elems.js';
import {call, call_display} from '../state/i.js';
import {stop, removeTrack, accept_track, } from '../media/f/i.js';
import {start_o, start_v_o} from '../media/conf.js';

import {
    type_stream,
    sender_tracks_reduce,
    call_stop_screen_share,
    stream_size,
    turn_camera,
    track_enabled_reduce,
    stream_to_peer,
    sender_remove_track,

    any_audio_reduce
} from './i.js';





export default (
    (T) => (e) => {
        var
            tc_i = call.tc_i,
            s = call.s
        ;
        return (
            call_display.v
            ? call_stop_screen_share(e)
            : (
                navigator
                .mediaDevices
                .getDisplayMedia(
                    ((tc_i === 1)||((tc_i === 2)&&(call_display.m === 1)))
                    ? start_v_o
                    : start_o
                )
                .then(
                    T
                )
            )
        );
    }
)(
    (new_s) => {
        var
            tc_i = call.tc_i,
            me = call.i,
            s = call.s,
            
            sh_mode = call_display.m,

            

            simple = (tc_i < 2),

            s_type = 0,

            tracks = new_s.getTracks(),

            new_tracks = (
                (simple)
                ? (
                    (s_type = tc_i),
                    s.getTracks().reduce(stop,s),
                    tracks
                )
                :
                (sh_mode === 2)
                ? (
                    (
                        tracks.reduce(any_audio_reduce, false)
                        ? (
                            (s_type = 2),
                            s.getTracks()
                        )
                        : (
                            (s_type = 1),
                            s.getVideoTracks()
                        )
                    )
                    .reduce(stop, s),

                    tracks
                )
                :
                (sh_mode === 0)
                ? (
                    (s_type = 0),

                    s.getAudioTracks().reduce(stop, s),
                    new_s.getVideoTracks().reduce(stop, new_s),

                    new_s.getAudioTracks()
                )
                : (
                    (s_type = 1),
                    s.getVideoTracks().reduce(stop, s),
                    tracks
                )
            )
        ;
        return (
            (new_tracks.length > 0)
            ? (
                new_tracks.reduce(removeTrack, new_s),
                new_tracks.reduce(accept_track, s),
                (new_tracks[0].onended = call_stop_screen_share),

                type_stream(s,s_type),

                me
                .getSenders()
                .reduce(
                    sender_tracks_reduce,
                    new_tracks
                ),

                (call_display.v = true),

                simple
                ? cl_sh.add("st")
                : b_dv_cl_sh_cl.add("to")
            )
            : console.error("cl_device_404")
        );
    }
);
