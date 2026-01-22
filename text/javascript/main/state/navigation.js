

export default (
    (path) => {
        
        var
            length_sections = 3,
            index_section = parseInt(path[1]),
            
            id_page = 0,
            id_stage = 0
        ;
        
        if (
            (path.length > 1)
            &&
            (
                ((index_section) >= 0)
                ||
                (index_section < length_sections)
            )
        ) {
            id_page = index_section;
        };

        return {
            length_sections,
            index_section,

            id_page,
            id_stage,

            tabindex:0,
        };
    }
)(
    window.location.search
);

