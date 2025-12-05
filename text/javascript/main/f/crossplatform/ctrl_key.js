export default (
    (
        navigator
        .platform
        .startsWith("Mac")
    )
    ? (
        (e) => (e.metaKey)
    )
    : (
        (e) => (e.ctrlKey)
    )
);
