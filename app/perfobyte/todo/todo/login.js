
[
    user: {
        fullname,
        verified: bool,
    },

    user_contact: {
        phone: str,
        country: int,
    },

    input(
        phone_number
    )
    .get([
        country,

        extra({
            name,
            surname,
        }),
    ]),
    
    if (VIRTUAL) {
        return (
            options([
                pay 1 US dollar,
                passport data,
                call,
            ])
        );
    }
    else {
        if (FIXED_LINE) {
            call and say code;
        }
        else if (SIM) {
            send code;
        }

        get data about user (KYC);
    }
];
