[
    BEF = binary executable file,

    RENDER = (html,css),
    SCRIPT = (js,wasm),

    [render-only]: RENDER => BEF,
    [headless mode]: SCRIPT => BEF,

    [full app]: [RENDER,SCRIPT] => BEF,

    env [
        web,
        nodejs,
        [
            perfobyte_os
        ],
    ],
    
    [compile for a specific device architecture]=config,
];
