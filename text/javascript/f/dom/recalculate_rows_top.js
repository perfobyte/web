

export default (
    (rows, start, row_height, i,l) => {
        for(;i<l;i++){
            ((rows[i]).style).top = `${start}px`;
            start += row_height;
        };
        return undefined;
    }
);
