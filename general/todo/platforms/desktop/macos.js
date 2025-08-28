

export default {
    lang: "C",
    lib: [
        "ANSI_C",
        full(POSIX_API),
        CoreFoundation(C_API),
        CoreGraphics,
        ApplicationServices,
        libSystem.dylib,
    ],
    comp: "Apple Clang - Apple's fork of Clang based on LLVM",
};
