import app_state from './app.js';

export default (
    (
        path,
        section,
        parseInt,
        section_length,
    ) => {
        var
            current_section = 0
        ;
        return {
            stage: 0,
            page_index: (
                (
                    (path.length > 1)
                    &&
                    (
                        (
                            (
                                current_section = (
                                    parseInt(
                                        path[1]
                                    )
                                )
                            ) >= 0
                        )
                        ||
                        (current_section < section_length)
                    )
                )
                ? (current_section)
                : (0)
            ),
        };
    }
)(
    globalThis.window.location.search,
    0,
    globalThis.Number,
    app_state.length,
);