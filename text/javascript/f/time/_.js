
export default (
    (o) => {
        return `${
            o.getHours().toString().padStart(2, '0')
        }:${
            o.getMinutes().toString().padStart(2, '0')
        }`
    }
)