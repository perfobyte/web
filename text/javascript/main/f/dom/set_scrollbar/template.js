
export default (
    (
        scrollbar_thumb_style,
        scrollbar_thumb_transform,
    ) =>
    
    (translate, ratio) => {
        return (
            scrollbar_thumb_style
            .transform = (
                scrollbar_thumb_transform(
                    translate,
                    ratio,
                )
            )
        );
    }
);
