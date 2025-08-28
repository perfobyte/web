
import {on_loader_submit} from './on/i.js';
import {loader} from "./elems.js";
import {preventDefault} from './general/i.js';

loader.querySelector("form").addEventListener("submit",on_loader_submit);
window.addEventListener("contextmenu",preventDefault);
document.body.classList.add("a");
