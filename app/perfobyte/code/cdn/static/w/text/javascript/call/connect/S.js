import {call} from '../../state/i.js';

export default (
    (setRemoteDescription) => (
        (a) => {
            return (
                call.u.setLocalDescription(call.a = a)
                .then(
                    setRemoteDescription
                )
            )
        }
    )
)(
    () => {
        var a = call.a;
        return (
            (call.a = null),
            call.i.setRemoteDescription(a)
        );
    }
);
