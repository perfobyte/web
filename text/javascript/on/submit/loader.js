import {
    app_params,
    app_value_copy,
    app_key,
    app_param_bf,
    app_param,
    app_nonce,
    app_value_str,
    app_key_stream,
    app_mix,
    app_value,

    support_codec,
    support_format,
} from '../../state/i.js';

import {
    c3_param,
    c3_param_setup,
    c3_to32,
    c3_update,
    
    SIGMA,
    ROUND_DATA,
} from '../../lib/cha3js/0.js';
import {
    to_base64,
    to_binary,
} from '../../f/i.js';
import {
    TE,API_1,API_2,API_3,

    support_rd_o,
} from '../../conf/i.js';
import {
    on_test_image_type,
} from '../i.js';


export default (
    (e) => {
        var
            w = globalThis.window,
            
            localStorage = globalThis.localStorage,
            ls_0 = localStorage.getItem("\x00"),

            t = e.currentTarget,

            pass_i = t.querySelector("input"),
            key_value = pass_i.value,

            bc = (
                (pass_i.value = ""),
                app_params[0]
            ),
            r = app_params[1],
            bs = app_params[2],
            kl = app_params[3],
            vl = app_params[6]
        ;
        return (
            e.preventDefault(),

            app_key.set(TE.encode(key_value).subarray(0, kl)),
            app_param_bf.set(c3_param(c3_param_setup(app_param,SIGMA),app_key,bc,app_nonce,c3_to32)),

            (ls_0 === null)
            ? (
                app_value_copy.set(app_value),

                localStorage
                .setItem(
                    "\x00",
                    to_base64(
                        app_value_str,
                        c3_update(
                            app_value_copy,0,vl,app_key_stream,bc,r,bs,app_mix,app_param_bf,ROUND_DATA
                        ),
                        0,
                        vl,
                    ),
                )
            )
            : (
                c3_update(
                    to_binary(
                        app_value,
                        globalThis.atob(ls_0),
                        0,
                        vl,
                    ),
                    0,vl,app_key_stream,bc,r,bs,app_mix,app_param_bf,ROUND_DATA
                )
            ),
            
            support_codec[2].reduce(check_can_play_type, support_rd_o[2]),
            support_codec[3].reduce(check_can_play_type, support_rd_o[3]),
            
            (API_1.onload = API_1.onerror = on_test_image_type),
            (API_1.src = support_codec[1][0]),

            undefined
        );
    }
);