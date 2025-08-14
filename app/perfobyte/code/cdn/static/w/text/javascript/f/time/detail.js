
export default (
    (hm, o) => {
        return `${
            hm
        }:${
            o.getSeconds().toString().padStart(2, '0')
        }.${
            o.getMilliseconds().toString().padStart(3, '0')
        }`
    }
)