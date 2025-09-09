
import {on_loader_submit} from './on/i.js';
import {loader} from "./elems.js";
import {preventDefault} from './general/i.js';

loader.querySelector("form").addEventListener("submit",on_loader_submit);
globalThis.window.addEventListener("contextmenu",preventDefault);
globalThis.document.body.classList.add("a");

setTimeout(
    () => {
        return (
            document.getElementById("password").focus()
        )
    },
    200
);
