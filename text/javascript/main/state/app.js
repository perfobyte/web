import {same} from '../f/general/i.js';

export default (
    (
        path,
    ) => {
        var
            length_sections = 3,
            current_section = 0,

            id_stage = 0,

            id_page = (
                (
                    (path.length_sections > 1)
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
                        (current_section < length_sections)
                    )
                )
                ? (current_section)
                : 0
            )
        ;
        return {
            id_stage,
            id_page,
            id_lang: 3762095517704366129n,

            length_sections,
            last_key:"",
            
            value_blured: same(""),

            separator: same("\n"),
            separator_block: same("\n\nbetween blocks\n\n"),
            separator_row: same("\n"),
        };
    }
)(
    window.location.search,
);
