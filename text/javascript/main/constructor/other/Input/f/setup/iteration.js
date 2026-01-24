

export default (
    (input,i,array) => {
        var
            element = input.template.cloneNode(true),

            state_nav = input.state_navigation
        ;

        element.onfocus = input.on_input_focus;
        element.onblur = input.on_input_blur;
        element.onbeforeinput = input.on_regular_input_beforeinput;

        element.setAttribute("tabindex", state_nav.tabindex++);

        input.setup(i, element);
    }
);
