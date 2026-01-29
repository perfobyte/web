

export default (
    (e, e_key, _) => {
        var
            selection = _.cursors[0].selection,

            value = (
                selection
                ? (
                    selection.string_value(
                        _.state_mode.separator,
                        _.arrays,
                        _.selection_empty_value,
                        _.states,
                    )
                )
                : _.state_app.value_blured()
            )
        ;
        
        _.clipboard.writeText(value);
    }
);
