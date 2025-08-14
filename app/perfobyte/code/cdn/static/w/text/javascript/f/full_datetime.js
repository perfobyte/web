
export default (
    (d) => {
        return (
            `at ${
                d.getHours().toString().padStart(2,'0')
            }:${
                d.getMinutes().toString().padStart(2,"0")
            } on ${
                d.getDate().toString().padStart(2, '0')
            }.${
                (d.getMonth() + 1).toString().padStart(2,'0')
            }.${
                d.getFullYear().toString()
            }`
        );
    }
);
