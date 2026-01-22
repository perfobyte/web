
export default (
    (style, token, width, wwl) => {
        style.top = `${token.top}px`;
        style.left = `${token.left - wwl}px`;
        style.height = `${token.height}px`;

        style.width = `${wwl + width}px`;
    }
);
