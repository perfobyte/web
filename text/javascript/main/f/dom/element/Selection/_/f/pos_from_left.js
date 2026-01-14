

export default (
    (TW, node_text, token, block_value, offset) => {
        node_text.textContent = block_value.substring(token.start, offset);
        return (token.left + (TW.offsetWidth));
    }
)