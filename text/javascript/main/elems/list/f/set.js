

export default (
    (target, prop, value) => {
        return Reflect.set(target, prop, value, target);
    }
);
