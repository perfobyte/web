
export default (
    (style, token, wwl, wwt) => {
        style.top = `${token.top}px`;
        style.left = `${token.left - wwl}px`;
        style.height = `${token.height}px`;

        style.width = `${wwl + token.width + wwt}px`;
    }
);
