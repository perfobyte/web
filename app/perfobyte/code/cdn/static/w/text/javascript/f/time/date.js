

export default (
    (o) => `${o.getDate().toString().padStart(2, '0')}.${(o.getMonth() + 1).toString().padStart(2, '0')}.${o.getFullYear()}`
)