import NO_DEVICE from './NO_DEVICE.js';
import Platform from './Platform.js';
import Device from './Device.js';

export default {
    [Platform.WINDOWS]: {
        [Device.DESKTOP]:{},
        [Device.LAPTOP]:{},
        [Device.TABLET]:{},

        [Device.TV]:{},
        [Device.CONSOLE]:{},

        [Device.MOBILE]: NO_DEVICE,
    },

    [Platform.LINUX]: {
        [Device.DESKTOP]: {},
        [Device.LAPTOP]: {},
        [Device.TABLET]: {},
        
        [Device.TV]: {},
        [Device.CONSOLE]: {},

        [Device.MOBILE]:NO_DEVICE,
    },

    [Platform.MACOS]: {
        [Device.DESKTOP]: {},
        [Device.LAPTOP]: {},

        [Device.MOBILE]:NO_DEVICE,
        [Device.TABLET]:NO_DEVICE,
        [Device.TV]:NO_DEVICE,
        [Device.CONSOLE]:NO_DEVICE,
    },

    [Platform.IOS]: {
        [Device.MOBILE]:{},
        [Device.TABLET]:{},
        [Device.TV]:{},

        [Device.DESKTOP]:NO_DEVICE,
        [Device.LAPTOP]:NO_DEVICE,
        [Device.CONSOLE]:NO_DEVICE,
    },

    [Platform.ANDROID]: {
        [Device.MOBILE]: {},
        [Device.TABLET]: {},

        [Device.TV]: {},
        [Device.CONSOLE]: {},

        [Device.DESKTOP]:NO_DEVICE,
        [Device.LAPTOP]:NO_DEVICE,
    },
};
