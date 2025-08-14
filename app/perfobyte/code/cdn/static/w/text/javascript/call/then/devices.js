import {stop} from '../../media/f/i.js';


export default (
    (s) => {
        return (
            s.getTracks().reduce(stop, s),
            navigator.mediaDevices.enumerateDevices()
        );
    }
)