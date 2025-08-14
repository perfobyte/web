

import {regular, secure} from './tcp/i.js';
import {bot, ssh,} from './server/i.js';

import {email, email_confidential, email_protected} from './email/i.js';
import {
    local,

    bluetooth_two_way,
    bluetooth_low_energy,
    
    wifi_router,
    wifi_direct,
    wifi_ibss,
    wifi_aware,
    wifi_apple_mc,
} from './local/i.js';

import {
    voip,

    bitcoin_deployment,
    bitcoin_remote_access,
} from './paid/i.js';

var
    ALL = [
        local,
        
        regular,
        email,
        bot,

        wifi_router,
        bluetooth_low_energy,

        secure,
        email_confidential,
        email_protected,
        
        bitcoin_remote_access,
        voip,
    ],

    NATIVE = [
        ssh,
        bluetooth_two_way,

        wifi_direct,
        wifi_ibss,
        wifi_aware,
        wifi_apple_mc,

        bitcoin_deployment,
    ]
;


export default [
    ...ALL,
    ...NATIVE,
];
