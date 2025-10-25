
panel [
    battery charge,
    time,
    general volume,
    internet presence and speed,
    (opened chats and switch) = ENV_ENTITIES
];

calculator;

datetime module (
    utc,
    reminder (timer),
    stopwatch,
    calendar (msmh,dmy),
);

enviroment API [
    git,
    luks,
];


import "./app.js";
