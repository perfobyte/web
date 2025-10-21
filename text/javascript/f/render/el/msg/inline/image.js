// false && fetch("https://picsum.photos/536/354")
// .then(r=>r.arrayBuffer())
// .then(bf => {
//     var
//         blob = new Blob([bf], { type: "image/png" }),
//         NEW_IMG = new Image(),
//         url = URL.createObjectURL(blob)
//     ;
//     return (
//         (NEW_IMG.onload = function() {
            
//             return (
//                 (NEW_IMG.onload=null),

//                 window.addEventListener("mousemove", on_view_image_window_mousemove),

//                 msgs_ul.appendChild(
//                     msg_image_el(
//                         MSG_IMAGE.cloneNode(true),
//                         this,
//                         12312312,
//                         this.naturalWidth,
//                         this.naturalHeight,
//                     )
//                 ),
                
//                 on_view_scroll_bar_mousedown(
//                     window,
//                     D.querySelector("#view1 .zoom"),
//                     on_view_image_zoom_cb,
//                 ),

//                 (VIEW_1_IMG.onload = on_view_image_load),
//                 (VIEW_1_IMG.src = url),

//                 (html.scrollTop = html.scrollHeight)
//             );
//         }),
//         (NEW_IMG.onerror=on_msg_image_error),
//         (NEW_IMG.src=url)
//     )
// })