import {audio,video,o,only_v_o,vdi,mdi} from '../conf.js';
import {start_cn,exit} from './i.js';
import {cm_au_cl} from '../elems.js';
import C from '../cache.js';
import O from '../../state/O.js';



export default (
    (dv) => {
        var
            d = vdi.exact,
            m = mdi.exact,

            run = false,

            l = dv.length,
            i = 0,
            
            di = "",
            k = "",
            _ = null,

            CO = C.o
        ;

        if (CO.audio) {
            a: {
                if (m) {
                    for (;i<l;i++) {
                        if (((_ = dv[i]).kind === "audioinput") && (_.deviceId === m)) {
                            cm_au_cl.remove("hi");
                            break a;
                        }
                    }
                    i=0;
                }
                for(;i<l;i++) {
                    if ((_=dv[i]).kind === "audioinput") {
                        localStorage.setItem("4", (O.md = mdi.exact = _.deviceId));
                        cm_au_cl.remove("hi");
                        
                        break;
                    };
                };
                i=0;
                cm_au_cl.add("hi");
                CO = C.o = only_v_o;
            }
        }
        else {
            cm_au_cl.add("hi");
        }
        
        a: {
            if (d) {
                for (;i<l;i++) {
                    if (((_ = dv[i]).kind === "videoinput") && (_.deviceId === d)) {
                        run = true;
                        break a;
                    }
                }
                i=0;
            }
            for(;i<l;i++) {
                if ((_=dv[i]).kind === "videoinput") {
                    run = true;
                    localStorage.setItem("2", (O.vd = vdi.exact = _.deviceId));
                    break;
                };
            };
        };
        
        return (
            run
            ? (
                navigator
                .mediaDevices
                .getUserMedia(
                    CO
                )
                .then(start_cn)
                .catch(console.error)
            )
            : console.error("NOT_FOUND_DEVICES")
        );
    }
);
