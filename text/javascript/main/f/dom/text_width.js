
export default (
    (check_element, chars) => {
        return (
            (check_element.textContent = chars),
            (check_element.getBoundingClientRect().width)
        );
    }
);
