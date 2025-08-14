import {canvas,V,camera_cl} from '../../elems.js';

export default (
    (e) => {
        return (
            e.stopPropagation(),

            canvas
            .getContext("2d")
            .drawImage(
                V,
                0,
                0,
                (canvas.width = V.videoWidth),
                (canvas.height = V.videoHeight)
            ),

            ((a,b) => {
                b.appendChild(a);
                a.href = canvas.toDataURL("image/jpeg", 1.0);
                a.download = "snapshot.jpg";
                a.click();
                a.remove();
            })(document.createElement("a"),document.body),

            V.play(),
            camera_cl.remove("c")
        );
    }
);
