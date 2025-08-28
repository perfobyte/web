import devices_deploy from './devices_deploy.js';
import no_device from './no_device.js';
import {start_clear} from '../both/i.js';

import {mc_se} from "../../../elems.js";
import {note} from '../../../state/i.js';

export default (
    (r) => {
        var s = r.state;
        return(
            s==="denied"
            ? (note.SE.innerHTML="<option>Access denied</option>")
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
                    .getUserMedia(note.O)
                    .then(start_clear)
                )
            )
            .then(devices_deploy)
            .catch(no_device)
        )
    }
);
