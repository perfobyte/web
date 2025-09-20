

export default (seconds) => {
    var
        h = Math.floor(seconds / 3600),
        m = Math.floor((seconds % 3600) / 60),
        s = (seconds % 60)
    ;
    console.log(h,m,s);
    
    return (
        (h === 0)
        ? `${m}:${s.toString().padStart(2, "0")}`
        : `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
    );
}