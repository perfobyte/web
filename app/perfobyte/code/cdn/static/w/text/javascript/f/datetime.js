import time_opts from './time_opts.js';

export default (
    (d) => (
        `${
            d.toLocaleTimeString('en-GB', time_opts)
        } ${
            d.getDate().toString().padStart(2, '0')
        }.${
            (1 + d.getMonth()).toString().padStart(2, '0')
        }.${
            d.getFullYear()
        }`
    )
);
