

export default (
    (token,i,array) => {
        token.setup(i, token.template.cloneNode(true));
    }
);
