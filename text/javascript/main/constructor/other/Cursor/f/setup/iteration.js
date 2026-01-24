
export default (
    (cursor,i,array) => {
        cursor.setup(
            i,
            cursor.template.cloneNode(true),
            cursor.setup_token
        );
    }
);
