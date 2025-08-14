
export default (
    (modules) => {
        return () => {
            return(
                modules
            );
        }
    }
)(
    [
        {
            n: "Own",
            d: "Encrypted chat for storing files and messages for personal purposes. Messages are encrypted with your app and chat passwords.",
            s: `/image/svg+xml/local.svg`
        },
        {
            n: "Simple",
            d: "HTTPS chat without encryption is available for unverified users.",
            s: "/image/svg+xml/simple.svg"
        },
        {
            n: "Basic",
            d: "All messages are stored on the client side and are transmitted encrypted via end-to-end encryption through the server to the recipient.",
            s: "/image/svg+xml/e2e.svg"
        },
        {
            n: "E-Mail",
            d: "Receiving and sending emails via SMTP protocol with the ability to filter them.",
            s: "/image/svg+xml/email.svg"
        },
    ]
);
