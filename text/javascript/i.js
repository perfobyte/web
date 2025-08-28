

import {on_loader_submit} from './on/i.js';
import {loader} from "./elems.js";
loader.querySelector("form").addEventListener("submit",on_loader_submit);
document.body.classList.add("a");
window.addEventListener("contextmenu",e=>e.preventDefault());
