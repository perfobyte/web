export default {
    protocol: {
        content: {
            name: [
                "RFC 5322",
                "MIME (Multipurpose Internet Mail Extensions)",
            ]
        },
        transport: {
            from_client_to_server: {
                smtp: {
                    port: {
                        25: "server-server",
                        587: [
                            "submission",
                            "client-server",
                        ],
                        465: {
                            sometimes:true,
                            description: "SMTP over SSL",
                        },
                    }
                },
            },
            
            from_server_to_client: {
                imap: {
                    description: "Internet Message Access Protocol",
                    feature: "sync with email server",

                    port: {
                        143: 'STARTTLS',
                        993: "IMAPS — SSL",
                    }
                },

                pop3: {
                    feature: "send to client messages and deletes it in database (more simple)",
                    port: {
                        110: "STARTTLS",
                        995: "POP3S — SSL",
                    }
                }
            },
        }
    }
}