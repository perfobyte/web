import {turn_camera} from '../../i.js';

export default (
    (s) => {
        var 
            size = s.getVideoTracks()[0].getSettings()
        ;
        return (
            turn_camera(size.width, size.height),
            s
        );
    }
)