export default (
    (
        buffer_view,
        
        buffer_offset,
        buffer_end,
        file_offset,
        
        action,
        access,
        payload,
    ) => {
        return (
            (payload.at = file_offset),

            action(
                access,

                buffer_view
                .subarray(buffer_offset,buffer_end),

                payload
            )
        );
    }
);
