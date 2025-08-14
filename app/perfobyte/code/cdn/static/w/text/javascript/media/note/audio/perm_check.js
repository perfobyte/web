import {devices_deploy,no_device} from './i.js';
import { mc_se } from "../../elems.js";
import C from '../c.js';
import {start_clear} from '../../logic/i.js';



export default (
    (r) => {
        var s = r.state;
        return(
            s==="denied"
            ? (C.SE.innerHTML="<option>Access denied</option>")
            : (
                (s === "granted")
                ? (
                    navigator
                    .mediaDevices
                    .enumerateDevices()
                )
                : (
                    navigator
                    .mediaDevices
                    .getUserMedia(C.O)
                    .then(start_clear)
                )
            )
            .then(devices_deploy)
            .catch(no_device)
        )
    }
);
