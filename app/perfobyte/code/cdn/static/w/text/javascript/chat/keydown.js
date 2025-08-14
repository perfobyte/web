import send from './send.js';


export default (
    (e) => {
        return (
            (
                !(e.shiftKey)
                &&
                (e.keyCode === 13)
            )
            &&
            (e.preventDefault(), send(e))
        );
    }
);
