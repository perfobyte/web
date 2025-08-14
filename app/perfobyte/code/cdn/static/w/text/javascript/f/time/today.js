

export default (
    (now,time) => {
        return (
            Math.abs(now - time) < 86400000
        );
    }
)