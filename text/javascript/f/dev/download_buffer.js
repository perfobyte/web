export default (
    (name, arr) => {
        var
            blob = new Blob([arr.buffer], { type: "application/octet-stream" }),
            url = URL.createObjectURL(blob),
            a = document.createElement("a")
        ;
        return void (
            (a.href = url),
            (a.download = name),
            a.click(),
            URL.revokeObjectURL(url)
        );
    }
)