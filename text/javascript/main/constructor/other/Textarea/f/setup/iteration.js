
export default (
    (textarea,i,array) => {
        var
            element = textarea.template.cloneNode(true),

            state_nav = textarea.state_navigation
        ;
        element.setAttribute("tabindex", state_nav.tabindex++);
        textarea.setup(i, element);
    }
);
