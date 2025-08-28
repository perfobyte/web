
export default (
    (v) => (
        `${
            Math.floor(
                (v) / 60
            )
        }:${
            (
                v % 60
            )
            .toString()
            .padStart(2, '0')
        }`
    )
);
