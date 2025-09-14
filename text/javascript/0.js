
import {on_loader_submit} from './on/i.js';
import {loader_form} from "./elems.js";
import {preventDefault} from './general/i.js';

loader_form.addEventListener("submit",on_loader_submit);
globalThis.window.addEventListener("contextmenu",preventDefault);
globalThis.document.body.classList.add("a");

loader_form.removeAttribute("disabled");
document.getElementById("password").focus();
