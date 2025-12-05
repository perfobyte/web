import {small_response} from '../../conf/i.js';
import {state} from '../../state/i.js';

export default (
    () => {
        return (
            globalThis.postMessage(small_response)
        );
    }
);
