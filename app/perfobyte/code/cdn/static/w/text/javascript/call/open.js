import {start_a_o} from "../media/conf.js";


import {call_cl} from "../elems.js";

import {call,call_play,call_o} from '../state/i.js';

import {Q,S} from "./connect/i.js";
import {
    ontrack,
    me_onicecandidate, u_onicecandidate,
    on_accept_datachannel,
} from './on/i.js';

import {turn_camera, stream_size, stream_to_peer, track_enabled_reduce} from './i.js';
import {accept_track, removeTrack} from '../media/f/i.js';
import {size_stream, gain_stream} from './volume/i.js';

import {get_media_then, set_media_then, devices_then} from './then/i.js';


export default (
    (T) => (e) => {
        var
            t = e.currentTarget
        ;
        return (
            (
                call.tc_i = Number(
                    t
                    .getAttribute("data-tc")
                )
            ),
            
            (
                call.D0
                ? get_media_then(call)
                : (
                    navigator.mediaDevices.getUserMedia(call_o)
                    .then(devices_then)
                    .then(set_media_then)
                    .then(get_media_then)
                )
            )
            .then(T)
        )
    }
)(
    (s) => {
        var
            me = new RTCPeerConnection(),
            u = new RTCPeerConnection(),

            tc = call.tc,
            tc_i = call.tc_i,
            play = call_play[tc_i],

            play_0 = play[0]
        ;
        return (
            ((call.i = me).onicecandidate = me_onicecandidate),
            ((call.u = u).onicecandidate = u_onicecandidate),
            (u.ondatachannel = on_accept_datachannel),
            (u.ontrack = ontrack),

            (
                call.s = (
                    (tc_i === 0)
                    ? (
                        // me.addTransceiver('audio', tc),
                        turn_camera(200,200),
                        gain_stream(s)
                    )
                    :
                    (tc_i === 1)
                    ? (
                        // me.addTransceiver('video', tc),
                        size_stream(s)
                    )
                    : (
                        // me.addTransceiver('video', tc),
                        // me.addTransceiver('audio', tc),

                        size_stream(gain_stream(s))
                    )
                )
            )
            .getTracks()
            .reduce(stream_to_peer, call),
            
            (call.d = me.createDataChannel("control")),

            call_cl.add("_"+tc_i),
            call_cl.add("a"),

            (play_0.srcObject = s),
            
            me.createOffer()
            .then(Q)
            .then(S)            
        );
    }
);
