import {audio_vl_slider} from '../../elems.js';


export default (
    (e) => {
        return (
            (audio_vl_slider.transform = `scaleX(${e.currentTarget.volume})`)
        );
    }
);
