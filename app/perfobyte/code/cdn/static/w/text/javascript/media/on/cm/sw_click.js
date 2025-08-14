
import {cm_sh} from '../../elems.js';
import {switch_vd,shoot_rt} from '../../logic/i.js';

export default (
    (e) => {
        return(
            cm_sh.add('b'),

            navigator
            .mediaDevices
            .enumerateDevices()
            .then(
                switch_vd
            )
            .finally(
                shoot_rt
            )
        );
    }
);
