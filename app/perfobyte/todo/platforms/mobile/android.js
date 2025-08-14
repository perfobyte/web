

var 
    NDK = (
        (part) => {
            return "from Android NDK";
        }
    )
;

export default {
    lang: C,
    lib: NDK(bionic),
    comp: NDK(LLVM(Clang)),
};
