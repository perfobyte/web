import {audio_vl_slider} from '../../elems/i.js';


export default (
    (e) => {
        return (
            (audio_vl_slider.transform = `scaleX(${e.currentTarget.volume})`)
        );
    }
);
