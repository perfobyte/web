import {vdcf,vd_o,start_o,o,audio,perm_mc,mimeType,} from '../../conf.js';
import {perm_1} from '../../logic/i.js';


export default (
    () => {
        return(
            (
                vdcf.mimeType =
                vd_o.type =
                    mimeType
            ),
            
            navigator
            .permissions
            .query(perm_mc)
            .then(
                perm_1
            )
            .catch(console.error)
        );
    }
);
