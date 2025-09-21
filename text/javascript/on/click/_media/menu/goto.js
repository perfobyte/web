import {AUDIO_MENU_WIDTH, scrollTo} from '../../../../conf.js';


export default (
    (e) => {
        var
            t = e.currentTarget,
            ss_b = t.closest(".ss_b"),
            i = Number(t.getAttribute("data-a"))
        ;
        console.log(ss_b.children[i].offsetHeight);
        
        return (
            (scrollTo.left = (AUDIO_MENU_WIDTH * i)),
            (ss_b.style.height = `${ss_b.children[i].offsetHeight}px`),
            ss_b.scrollTo(scrollTo)
        );
    }
);
