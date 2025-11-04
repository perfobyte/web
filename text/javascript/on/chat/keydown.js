import send from './send.js';

export default (
    (e) => {
        var
            k = e.keyCode
        ;
        return (
            (k === 13)
            &&
            (
                (e.shiftKey)
                ||
                (
                    e.preventDefault(),
                    send(e)
                )
            ),

            undefined
        );
    }
);
