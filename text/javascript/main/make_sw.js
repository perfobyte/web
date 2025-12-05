
(
    (sw) => (
        sw.register('/s')
        .then(() => sw.ready)
        .then(reg => {
            console.log(reg);
        })
    )
)(navigator.serviceWorker);
