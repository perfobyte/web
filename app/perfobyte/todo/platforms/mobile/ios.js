

export default {
    lang: C,
    lib: [
        "ANSI_C",
        partially(POSIX_API),
        CoreFoundation(C_API),
        CoreGraphics,
        libSystem.dylib,
    ],
    comp: LLVM(Apple(Clang)),
}