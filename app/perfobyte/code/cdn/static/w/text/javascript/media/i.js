

import {
    cm_sw_click,
    cm_pa_click,
    cm_click,
    cm_fi_click,
    cm_au_bt_click,
} from './on/i.js';
import {exit, select_mode,rechange} from './logic/i.js';
import {start_cb} from './mode/i.js';
import { mc, cm_au, cm_pa, mc_se, nt_se, nt_au_se, nt_vd_se, nt } from "./elems.js";

import {mc_mdown,mc_se_click,mc_se_change} from './note/audio/on/i.js';
import {
    nt_mdown,

    nt_au_se_click,
    nt_au_se_change,

    nt_vd_se_click,
    nt_vd_se_change,
} from './note/video/on/i.js';

import c from './note/c.js';


export default (
    (D,O,md,tmpl,ap,w,perm) => {
        var
            vdi = O.vdi,
            mdi = O.mdi,
            m = O.m,

            mc_se_fc = mc_se.querySelector("option"),

            nt_au_se_fc = nt_au_se.querySelector("option"),
            nt_vd_se_fc = nt_vd_se.querySelector("option")
        ;

        return (
            (D.getElementById("cm_sw").onclick = cm_sw_click),

            (cm_pa.onclick = cm_pa_click),
            (D.getElementById("cm").onclick = cm_click ),
            (D.getElementById("cm_ca").onclick = exit),
            (D.getElementById("cm_fi").onclick = cm_fi_click),
            (cm_au.onclick = cm_au_bt_click),

            D
            .querySelectorAll("#cm_mo > button")
            .forEach(
                (v) => v.addEventListener("click",select_mode)
            ),
            
            start_cb[rechange(m,-1)](
                D.querySelector(`#cm_mo>:nth-child(${1+m})`)
            ),

            (mc.onmousedown = mc_mdown),
            (nt.onmousedown = nt_mdown),
            


            (mc_se.onfocus = mc_se_click),
            (mc_se.onchange = mc_se_change),

            (nt_au_se.onfocus =  nt_au_se_click),
            (nt_au_se.onchange = nt_au_se_change),

            (nt_vd_se.onfocus =  nt_vd_se_click),
            (nt_vd_se.onchange = nt_vd_se_change),

            (mc_se_fc.textContent = c.au_l),

            (nt_au_se_fc.textContent = c.nt_au_l),
            (nt_vd_se_fc.textContent = c.nt_vd_l)
        )
    }
)
