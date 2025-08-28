import send from './send.js';

export default (
    (e) => {
        return (
            (e.keyCode === 13)
            &&
            (!e.shiftKey)
            &&
            (e.preventDefault(), send(e)),
            0
        );
    }
);
