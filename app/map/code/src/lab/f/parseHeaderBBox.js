export default (
    (buf, start, end) => {
        let pos = start;
        const bbox = { left: null, right: null, top: null, bottom: null };
        while (pos < end) {
          const [key, p1] = readVarint(buf, pos);
          pos = p1;
          const field = key >> 3;
          const wire = key & 7;
      
          if ((field === 1 || field === 2 || field === 3 || field === 4) && wire === 0) {
            // sint64 -> varint zigzag
            const [v, p2] = readVarint64(buf, pos);
            pos = p2;
            const n = zigzag64_to_num(v);
            if (field === 1) bbox.left = n;
            else if (field === 2) bbox.right = n;
            else if (field === 3) bbox.top = n;
            else if (field === 4) bbox.bottom = n;
          } else {
            pos = skipField(buf, pos, wire);
          }
        }
        return bbox;
    }
);
