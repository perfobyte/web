// f/crossplatform/ctrl_key.js
var ctrl_key_default = navigator.platform.startsWith("Mac") ? (e) => e.metaKey : (e) => e.ctrlKey;

// f/data_types/number/clamp.js
var clamp_default = (value, min_value, max_value, min, max) => {
  return max(
    min(
      value,
      max_value
    ),
    min_value
  );
};

// f/dom/calc/list/width.js
var width_default = (width, list_left, list_right) => {
  return width - list_left - list_right;
};

// f/dom/calc/list/height.js
var height_default = (height, list_top, list_bottom) => {
  return height - list_top - list_bottom;
};

// state/app/f/get_crypt_data.js
var get_crypt_data_default = (Uint8Array2, Uint32Array2, DataView2, arrayFrom) => {
  var byte_counter = 0, rounds = 20, block_size = 64, key_length = 32, nonce_length = 12, param_length = 16, length = 4, value = new Uint8Array2(length);
  return {
    byte_counter,
    rounds,
    block_size,
    key_length,
    nonce_length,
    param_length,
    length,
    key_stream: new Uint8Array2(block_size),
    key: new Uint8Array2(key_length),
    mix: new Uint32Array2(param_length),
    nonce: new Uint8Array2(nonce_length),
    param_buffer: new Uint32Array2(param_length),
    param: new Uint32Array2(param_length),
    value,
    value_copy: new Uint8Array2(length),
    value_str: arrayFrom("\0".repeat(length)),
    value_view: new DataView2(value.buffer)
  };
};

// state/app/crypt.js
var crypt_default = get_crypt_data_default(
  globalThis.Uint8Array,
  globalThis.Uint32Array,
  globalThis.DataView,
  globalThis.Array.from
);

// state/support/format/font.js
var font_default = [
  {
    id: 0,
    extension: "woff2",
    format: "woff2",
    test: "",
    supported: false
  },
  {
    id: 1,
    extension: "woff",
    format: "woff",
    test: "",
    supported: false
  },
  {
    id: 2,
    extension: "ttf",
    format: "truetype",
    test: "",
    supported: false
  },
  {
    id: 3,
    extension: "otf",
    format: "opentype",
    test: "",
    supported: false
  },
  {
    id: 4,
    extension: "svg",
    format: "svg",
    test: "",
    supported: false
  },
  {
    id: 5,
    extension: "eot",
    format: "embedded-opentype",
    test: "",
    supported: false
  }
];

// state/support/font/i.js
var i_default = [
  {
    id: 0,
    name: "Open Sans",
    supported: true
  }
];

// state/alloc.js
var alloc_default = (() => {
  var size_block = 4096, size_ram = 8083100, size_memory_page = 4096, size_cpu_cache_line = 64, number_cpu_cache_lines = [
    131072,
    131072,
    1048576,
    3145728
  ], number_blocks = 1, number_message_blocks = 1, value_le = true, size_blocks = size_block * number_blocks, size_message_blocks = size_block * number_message_blocks, size_elements = size_block, blocks = Array(number_blocks).fill(""), buffer_request = new SharedArrayBuffer(
    number_blocks * 8
  ), buffer_request_view = new DataView(buffer_request), buffer_blocks = new SharedArrayBuffer(size_blocks), buffer_blocks_view = new DataView(buffer_blocks), buffer_messages = new SharedArrayBuffer(size_message_blocks), buffer_messages_view = new DataView(buffer_messages), offset_blocks = 0, number_memory_pages = size_ram / size_memory_page, size_message = 64, length_messages = 5 * size_message, string_block = "";
  string_block = "hello_my_friend\nhow are u bro\n i havent seen u a long time agosdfldsfkdsfksdfksdfsdf\\cwaitaaaa\naaaaai havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdf11\n2\n3\n4\n3553345435345345345534534\nx312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123\nhello/world//////";
  [
    { chat_id: 0n, block_id: 0, offset: 0, length: 62, id: 0n, timestamp: 0n },
    { chat_id: 0n, block_id: 0, offset: 63, length: 27, id: 1n, timestamp: 1n },
    { chat_id: 0n, block_id: 0, offset: 90, length: 10, id: 3n, timestamp: 2n },
    // 91 -> 90
    { chat_id: 0n, block_id: 0, offset: 100, length: 212, id: 4n, timestamp: 3n },
    // 101 -> 100
    { chat_id: 0n, block_id: 0, offset: 312, length: 197, id: 5n, timestamp: 4n }
    // 313 -> 312 ✅ now starts with "1"
  ].reduce(
    (view, message, index) => {
      var f = index * size_message;
      return view.setBigUint64(f, message.chat_id, true), view.setUint32(f + 8, message.block_id, true), view.setUint16(f + 12, message.offset, true), view.setUint16(f + 14, message.length, true), view.setBigUint64(f + 16, message.id, true), view.setBigUint64(f + 24, message.timestamp, true), view;
    },
    buffer_messages_view
  );
  return {
    value_le,
    size_memory_page,
    size_cpu_cache_line,
    size_block,
    size_ram,
    size_elements,
    size_message,
    offset_blocks,
    number_blocks,
    number_message_blocks,
    number_cpu_cache_lines,
    number_memory_pages,
    offset_loaded_elements: 0,
    length_loaded_elements: 0,
    blocks,
    buffer_messages,
    buffer_messages_view,
    offset_messages: 0,
    length_messages,
    string_block,
    offset_string_block: 0,
    buffer_blocks,
    buffer_blocks_view
  };
})();

// state/language.js
var language_default = {
  placeholder_value: "Type here something"
};

// state/section.js
var section_default = {
  length: 2
};

// state/main.js
var main_default = ((path, section, parseInt, section_length) => {
  var current_section = 0;
  return {
    stage: 0,
    page_index: path.length > 1 && ((current_section = parseInt(
      path[1]
    )) >= 0 || current_section < section_length) ? current_section : 0
  };
})(
  globalThis.window.location.search,
  0,
  globalThis.Number,
  section_default.length
);

// state/mode.js
var mode_default = {
  row_width: 0,
  rendering: 0
};

// state/style.js
var style_default = /* @__PURE__ */ ((row_height) => {
  var list_margin = 14;
  return {
    font_size: 16,
    font_size_default: 16,
    font_size_step: 1,
    font_id: 0,
    row_height,
    row_height_default: 22,
    zoom: 1,
    zoom_step: 0.1,
    zoom_default: 1,
    zoom_min: 0.375,
    zoom_max: 62.5,
    wheel_x_pixel_value: 1,
    wheel_y_pixel_value: 1,
    wheel_x_string_value: row_height,
    wheel_y_string_value: row_height,
    list_top: list_margin,
    list_right: list_margin,
    list_bottom: list_margin,
    list_left: list_margin,
    thumb_x_left: 0,
    thumb_x_right: row_height,
    thumb_y_top: 0,
    thumb_y_bottom: 0,
    thumb_x_size: 0,
    thumb_y_size: 0,
    thumb_x_translate: 0,
    thumb_y_translate: 0,
    thumb_x_scale: 1,
    thumb_y_scale: 1,
    list_width: 1,
    list_height: 1,
    loaded_height: 0,
    loaded_width: 0,
    extra_scroll_width: 0,
    extra_scroll_height: 0,
    content_width: 0,
    content_height: 0,
    excess_x: 0,
    excess_y: 0,
    sensitivity_wheel: 2e-3
  };
})(
  22
);

// conf/array_from_object.js
var array_from_object_default = { length: 0 };

// elems/list/i.js
var i_default3 = document.getElementById("list");

// elems/event.js
var resize_event = new Event("resize");
var click_event = new Event("click");
var mouseleave_event = new MouseEvent("mouseleave");

// elems/globalThis.js
var document2 = globalThis.document;
var window2 = globalThis.window;
var console = globalThis.console;
var Proxy = globalThis.Proxy;

// elems/i.js
var template = document.querySelector("template").content;
var html = document.documentElement;
var html_style = html.style;
var body = document.body;
var body_cl = body.classList;
var MESSAGE_ROW_EL = template.querySelector(".message_row");
var text_width_container = document.getElementById("text_width_container");
var scrollbar_x = document.getElementById("scrollbar_x");
var scrollbar_y = document.getElementById("scrollbar_y");
var scrollbar_thumb_x = document.getElementById("scrollbar_thumb_x");
var scrollbar_thumb_y = document.getElementById("scrollbar_thumb_y");
var scrollbar_thumb_x_style = scrollbar_thumb_x.style;
var scrollbar_thumb_y_style = scrollbar_thumb_y.style;
var list_inner = i_default3.firstElementChild;
var list_inner_style = list_inner.style;
var scrollbar_thumb = [
  scrollbar_thumb_x,
  scrollbar_thumb_y
];
var elements = (array_from_object_default.length = alloc_default.size_elements, Array.from(
  array_from_object_default,
  () => MESSAGE_ROW_EL.cloneNode(true)
));

// conf/crossplatform/zoom_keys.js
var zoom_keys_default = [
  "=",
  "-",
  "0"
];

// conf/linebreak/s.js
var s_default = ["\n"];

// conf/font_faces.js
var font_faces_default = [
  null
];

// conf/i.js
var TE = new TextEncoder();
var TD = new TextDecoder("utf8");
var IMAGE = new Image();
var AUDIO = new Audio();
var VIDEO = document2.createElement("video");
var CANVAS = document2.createElement("canvas");
var messages_fragment = document2.createDocumentFragment();
var messages_range = document2.createRange();
var CANVAS_2D_CONTEXT = CANVAS.getContext("2d");
var passive_false = { passive: false };
var x_move_event = {
  currentTarget: window,
  movementX: 0
};
var y_move_event = {
  currentTarget: window,
  movementY: 0
};
var xy_move_event = [
  x_move_event,
  y_move_event
];
var separation_result = {
  string_offset: 0,
  char_i: 0
};

// f/dom/text_width.js
var text_width_default = (check_element, chars) => {
  return check_element.textContent = chars, check_element.getBoundingClientRect().width;
};

// f/dom/is/char/newline.js
var newline_default = (string, char_i, string_offset, separation_result2) => {
  var next = char_i + 1;
  return separation_result2.char_i = next, s_default.includes(string[char_i]) ? (style_default.loaded_width = Math.max(
    style_default.loaded_width,
    text_width_default(
      text_width_container,
      string.substring(string_offset, char_i)
    )
  ), separation_result2.string_offset = next, true) : false;
};

// f/dom/is/spacious.js
var spacious_default = (string, char_i, string_offset, separation_result2) => {
  var next = char_i + 1, w = 0, loaded_width = style_default.loaded_width;
  return separation_result2.char_i = next, s_default.includes(string[char_i]) ? (style_default.loaded_width = Math.max(
    loaded_width,
    text_width_default(
      text_width_container,
      string.substring(string_offset, char_i)
    )
  ), separation_result2.string_offset = next, true) : (w = text_width_default(
    text_width_container,
    string.substring(string_offset, next)
  )) >= style_default.list_width ? (separation_result2.char_i = next, separation_result2.string_offset = char_i, true) : false;
};

// f/dom/is/separation.js
var separation_default = [
  newline_default,
  spacious_default
];

// f/dom/set_scrollbar/x.js
var x_default = (translate, ratio) => {
  return scrollbar_thumb_x_style.transform = thumb_x_transform_default(
    translate,
    style_default.thumb_x_scale = Math.min(
      1,
      ratio
    )
  );
};

// f/dom/set_scrollbar/y.js
var y_default = (translate, ratio) => {
  return scrollbar_thumb_y_style.transform = thumb_y_transform_default(
    translate,
    style_default.thumb_y_scale = Math.min(
      1,
      ratio
    )
  );
};

// f/dom/push/text/encoding/utf8.js
var utf8_default = (string, msgs, i, l, size_message, elems_i, elems_l, render_element, is_separation) => {
  var element = null, char_i = 0, char_l = 0, row_height = style_default.row_height, height = style_default.loaded_height, string_offset = 0;
  c: {
    while (i < l) {
      string_offset = char_i = msgs.getUint16(i + 12, true);
      char_l = string_offset + msgs.getUint16(i + 14, true);
      a: {
        while (char_i < char_l) {
          if (is_separation(
            string,
            char_i,
            string_offset,
            separation_result
          )) {
            render_element(
              element = elements[elems_i++],
              string,
              string_offset,
              char_i
            );
            string_offset = separation_result.string_offset;
            elems_l++;
            element.style.top = `${height}px`;
            height += row_height;
            messages_fragment.appendChild(element);
          }
          ;
          char_i = separation_result.char_i;
        }
        ;
        if (string_offset < char_l) {
          render_element(
            element = elements[elems_i++],
            string,
            string_offset,
            char_l
          );
          elems_l++;
          element.style.top = `${height}px`;
          height += row_height;
          messages_fragment.appendChild(element);
        }
      }
      ;
      i += size_message;
    }
    ;
  }
  ;
  list_inner.appendChild(messages_fragment);
  alloc_default.length_loaded_elements = elems_l;
  style_default.loaded_height = height;
  return void 0;
};

// f/dom/push/text/encoding/i.js
var i_default4 = [
  utf8_default
];

// f/dom/push/text/i.js
var i_default5 = [
  i_default4
];

// f/dom/push/i.js
var i_default6 = [
  i_default5
];

// f/dom/edit/text/encoding/utf8.js
var utf8_default2 = (string, msgs, i, l, size_message, elems_i, elems_l, expand_nodes, element_render, is_separation) => {
  var element = null, char_i = 0, char_l = 0, top = 0, bottom = 0, elements_l_start = elems_l, row_height = style_default.row_height, height = style_default.loaded_height, string_offset = 0;
  general: {
    append: {
      while (i < l) {
        string_offset = char_i = msgs.getUint16(i + 12, true);
        char_l = string_offset + msgs.getUint16(i + 14, true);
        while (char_i < char_l) {
          if (is_separation(string, char_i, string_offset, separation_result)) {
            if (elems_i < elems_l) {
              element_render(
                elements[elems_i++],
                string,
                string_offset,
                char_i
              );
              string_offset = separation_result.string_offset;
            } else {
              break append;
            }
            ;
          }
          ;
          char_i = separation_result.char_i;
        }
        ;
        if (elems_i < elems_l) {
          if (string_offset < char_l) {
            element_render(
              elements[elems_i++],
              string,
              string_offset,
              char_l
            );
          }
        } else {
          break append;
        }
        ;
        i += size_message;
      }
      break general;
    }
    ;
    expand_nodes(
      elements,
      elems_i,
      MESSAGE_ROW_EL,
      alloc_default
    );
    while (char_i < char_l) {
      if (is_separation(string, char_i, string_offset, separation_result)) {
        element_render(
          element = elements[elems_i++],
          string,
          string_offset,
          char_i
        );
        string_offset = separation_result.string_offset;
        elems_l++;
        element.style.top = `${height}px`;
        height += row_height;
        messages_fragment.appendChild(element);
      }
      ;
      char_i = separation_result.char_i;
    }
    ;
    if (string_offset < char_l) {
      element_render(
        element = elements[elems_i++],
        string,
        string_offset,
        char_l
      );
      elems_l++;
      element.style.top = `${height}px`;
      height += row_height;
      messages_fragment.appendChild(element);
    }
    i += size_message;
    while (i < l) {
      string_offset = char_i = msgs.getUint16(i + 12, true);
      char_l = string_offset + msgs.getUint16(i + 14, true);
      while (char_i < char_l) {
        if (is_separation(string, char_i, string_offset, separation_result)) {
          element_render(
            element = elements[elems_i++],
            string,
            string_offset,
            char_i
          );
          string_offset = separation_result.string_offset;
          elems_l++;
          element.style.top = `${height}px`;
          height += row_height;
          messages_fragment.appendChild(element);
        }
        ;
        char_i = separation_result.char_i;
      }
      ;
      if (string_offset < char_l) {
        element_render(
          element = elements[elems_i++],
          string,
          string_offset,
          char_l
        );
        elems_l++;
        element.style.top = `${height}px`;
        height += row_height;
        messages_fragment.appendChild(element);
      }
      i += size_message;
    }
    ;
  }
  ;
  if (elems_l > elements_l_start) {
    list_inner.appendChild(messages_fragment);
    alloc_default.length_loaded_elements = elems_l;
    style_default.loaded_height = height;
  } else if (elems_i < elems_l) {
    messages_range.setStartBefore(element = elements[elems_i]);
    l = element.getBoundingClientRect().top;
    messages_range.setEndAfter(element = elements[elems_l - 1]);
    l = element.getBoundingClientRect().bottom - l;
    alloc_default.length_loaded_elements = elems_i;
    style_default.loaded_height = height - l;
    messages_range.deleteContents();
  }
  ;
  return void 0;
};

// f/dom/edit/text/encoding/i.js
var i_default7 = [
  utf8_default2
];

// f/dom/edit/text/i.js
var i_default8 = [
  i_default7
];

// f/dom/edit/i.js
var i_default9 = [
  i_default8
];

// f/dom/expand_nodes.js
var expand_nodes_default = (elems, i, template2, alloc_state) => {
  var size_elements = alloc_state.size_elements, l = elems.length, new_length = l + size_elements;
  elems.length = new_length;
  while (l < new_length) {
    elems[l++] = template2.cloneNode(true);
  }
  ;
};

// f/dom/render_element.js
var render_element_default = (element, string, offset, to) => {
  return element.firstElementChild.textContent = string.substring(offset, to);
};

// on/contextmenu/_.js
var __default3 = (e) => e.preventDefault();

// on/error/_.js
var __default4 = globalThis.console.error;

// on/resize/window/template_cb/simple.js
var simple_default = (width, height, list_width, list_height, thumb_x_size, thumb_y_size) => {
  var min = Math.min, max = Math.max, scale_x = min(
    1,
    list_width / style_default.content_width
  ), scale_y = min(
    1,
    list_height / style_default.content_height
  ), move_x = style_default.thumb_x_translate, move_y = style_default.thumb_y_translate, excess_x = move_x + thumb_x_size * scale_x - thumb_x_size, excess_y = move_y + thumb_y_size * scale_y - thumb_y_size, row_height = style_default.row_height;
  return void (scrollbar_thumb_x_style.transform = thumb_x_transform_default(
    (style_default.excess_x = excess_x) > 0 ? (style_default.excess_x = excess_x, style_default.thumb_x_translate -= excess_x) : (style_default.excess_x = 0, move_x),
    style_default.thumb_x_scale = scale_x
  ), scrollbar_thumb_y_style.transform = thumb_y_transform_default(
    excess_y > 0 ? (style_default.excess_y = excess_y, style_default.thumb_y_translate -= excess_y) : (style_default.excess_y = 0, move_y),
    style_default.thumb_y_scale = scale_y
  ));
};

// on/resize/window/template_cb/symbol.js
var symbol_default = (width, height, list_width, list_height, thumb_x_size, thumb_y_size) => {
  var list_scroll_height = 0, row_height = style_default.row_height, rows = i_default3.children, row_l = rows.length, edit_rows = i_default9[0][0][0], blocks = alloc_default.blocks, i = 0, l = alloc_default.number_blocks, used = alloc_default.offset_messages, chat_messages = null, row_width_mode = mode_default.row_width, size_x = 0, size_y = 0;
  edit_rows(
    alloc_default.string_block,
    alloc_default.buffer_messages_view,
    0,
    alloc_default.length_messages,
    alloc_default.size_message,
    alloc_default.offset_loaded_elements,
    alloc_default.length_loaded_elements,
    expand_nodes_default,
    render_element_default,
    separation_default[row_width_mode]
  );
  list_scroll_height = style_default.content_height;
  return void (scrollbar_thumb_y_style.transform = thumb_y_transform_default(
    style_default.thumb_y_translate,
    style_default.thumb_y_scale = Math.min(
      1,
      list_height / list_scroll_height
    )
  ));
};

// on/resize/window/template_cb/token.js
var token_default = (scrollbar_thumb_x_style2, scrollbar_thumb_y_style2, scrollbar_thumb_x_transform, scrollbar_thumb_y_transform, style_state, min, list_width, list_height, list_scroll_width, list_scroll_height, prev_list_width, prev_list_height) => {
  var zoom_prev = style_state.zoom_prev, zoom = style_state.zoom;
  return scrollbar_thumb_y_style2.transform = scrollbar_thumb_y_transform(
    style_state.thumb_y_translate,
    style_state.thumb_y_scale = min(
      1,
      list_height / list_scroll_height
    )
  );
};

// on/resize/window/template_cb/i.js
var i_default10 = [
  simple_default,
  symbol_default,
  token_default
];

// on/resize/window/_.js
var __default5 = (e) => {
  var window3 = e.currentTarget, html_style2 = window3.document.documentElement.style, width = window3.innerWidth, height = window3.innerHeight, list_width = 0, list_height = 0, row_width_mode = mode_default.row_width, thumb_x_size = 0, thumb_y_size = 0, list_top = style_default.list_top;
  return void (html_style2.setProperty("--width", `${width}px`), html_style2.setProperty("--height", `${height}px`), style_default.thumb_x_size = thumb_x_size = width - style_default.thumb_x_left - style_default.thumb_x_right, style_default.thumb_y_size = thumb_y_size = height - style_default.thumb_y_top - style_default.thumb_y_bottom, html_style2.setProperty(
    "--list-width",
    `${style_default.list_width = list_width = width_default(
      width,
      style_default.list_left,
      style_default.list_right
    )}px`
  ), html_style2.setProperty(
    "--list-height",
    `${style_default.list_height = list_height = height_default(
      height,
      list_top,
      style_default.list_bottom
    )}px`
  ), i_default10[row_width_mode](
    width,
    height,
    list_width,
    list_height,
    thumb_x_size,
    thumb_y_size
  ));
};

// on/mouse/down/list.js
var list_default = (e) => {
  return e.preventDefault();
};

// on/mouse/move/scroll_template.js
var scroll_template_default = (list, style_state, get_scrolled, get_scrollbar_size, set_list_scroll, scrollbar, scrollbar_thumb_style, get_scroll_size, scrollbar_thumb_transform, get_scale, set_scroll) => {
  return (e) => {
    var scrolled = get_scrolled(e, style_state, e.currentTarget, scrollbar), scrollbar_size = get_scrollbar_size(scrollbar), ratio = scrolled / scrollbar_size, list_scroll = ratio * get_scroll_size(list);
    return void set_scroll(
      scrollbar_thumb_style,
      scrollbar_thumb_transform(
        scrolled,
        get_scale(style_state)
      ),
      set_list_scroll,
      list,
      list_scroll
    );
  };
};

// f/scroll/bar/thumb_x_transform.js
var thumb_x_transform_default = (translate, scale) => {
  return `translateX(${translate}px) scaleX(${scale})`;
};

// f/scroll/bar/thumb_y_transform.js
var thumb_y_transform_default = (translate, scale) => {
  return `translateY(${translate}px) scaleY(${scale})`;
};

// f/scroll/get/size/x.js
var x_default2 = (list) => list.scrollWidth;

// f/scroll/get/size/y.js
var y_default2 = (list) => list.scrollHeight;

// f/scroll/set/list/x.js
var x_default3 = (list, new_value) => {
  return list.scrollLeft = new_value;
};

// f/scroll/set/list/y.js
var y_default3 = (list, new_value) => {
  return list.scrollTop = new_value;
};

// f/scroll/set/_.js
var __default6 = (scrollbar_thumb_style, transform_value, set_list_scroll, list, new_scroll_value) => {
  return scrollbar_thumb_style.transform = transform_value, set_list_scroll(list, new_scroll_value);
};

// f/get/size/offset/x.js
var x_default4 = (element) => element.offsetWidth;

// f/get/size/offset/y.js
var y_default4 = (element) => element.offsetHeight;

// f/get/scale/x.js
var x_default5 = (style_state) => style_state.thumb_x_scale;

// f/get/scale/y.js
var y_default5 = (style_state) => style_state.thumb_y_scale;

// on/mouse/move/scrollbar_thumb.js
var scrollbar_thumb_default = [
  scroll_template_default(
    i_default3,
    style_default,
    (e, style_state, window3, scrollbar) => {
      var prev = style_state.thumb_x_translate, new_value = prev + e.movementX, w = scrollbar.offsetWidth, thumb_w = w * style_state.thumb_x_scale;
      return style_state.thumb_x_translate = Math.max(
        0,
        Math.min(
          w - thumb_w,
          new_value
        )
      );
    },
    x_default4,
    x_default3,
    scrollbar_x,
    scrollbar_thumb_x_style,
    x_default2,
    thumb_x_transform_default,
    x_default5,
    __default6
  ),
  scroll_template_default(
    i_default3,
    style_default,
    (e, style_state, window3, scrollbar) => {
      var prev = style_state.thumb_y_translate, new_value = prev + e.movementY, h = scrollbar.offsetHeight, thumb_h = h * style_state.thumb_y_scale;
      return style_state.thumb_y_translate = Math.max(
        0,
        Math.min(
          h - thumb_h,
          new_value
        )
      );
    },
    y_default4,
    y_default3,
    scrollbar_y,
    scrollbar_thumb_y_style,
    y_default2,
    thumb_y_transform_default,
    y_default5,
    __default6
  )
];

// on/mouse/up/scrollbar_thumb_template.js
var scrollbar_thumb_template_default = (move, scrollbar_thumb_cl) => {
  var up = (e) => {
    var t = e.currentTarget;
    return void (t.removeEventListener("mousemove", move), t.removeEventListener("mouseup", up), scrollbar_thumb_cl.remove("hover"));
  };
  return up;
};

// on/mouse/up/scrollbar_thumb.js
var scrollbar_thumb_default2 = Array.from(
  scrollbar_thumb_default,
  (move, i) => {
    return scrollbar_thumb_template_default(move, scrollbar_thumb[i].classList);
  }
);

// on/mouse/down/scrollbar_thumb.js
var scrollbar_thumb_default3 = (e) => {
  var t = e.currentTarget, w = e.view, i = t.getAttribute("data-coord-type");
  return void (e.preventDefault(), e.stopPropagation(), t.querySelector(".scrollbar_thumb").classList.add("hover"), w.addEventListener("mouseup", scrollbar_thumb_default2[i]), w.addEventListener("mousemove", scrollbar_thumb_default[i]));
};

// on/key/down/window.js
var window_default = (e) => {
  var zoom_key_index = 0, var_number_2 = 0, var_number_3 = 0, var_number_4 = 0, min = Math.min, max = Math.max, key = e.key, window3 = e.view;
  return ctrl_key_default(e) && (zoom_key_index = zoom_keys_default.indexOf(key)) > -1 && (e.preventDefault(), e.stopPropagation(), zoom_default(
    zoom_key_index < 2 ? clamp_default(
      zoom_key_index === 0 ? style_default.zoom + style_default.zoom_step : style_default.zoom - style_default.zoom_step,
      style_default.zoom_min,
      style_default.zoom_max,
      min,
      max
    ) : style_default.zoom_default
  ));
};

// on/key/up/window.js
var window_default2 = (e) => {
  return void 0;
};

// on/select/start/list.js
var list_default2 = (e) => e.preventDefault();

// on/wheel/list.js
var list_default3 = (event) => {
  var delta = 0, direction_key = "", direction = event.shiftKey ? (direction_key = "movementX", delta = event.deltaX || event.deltaY, 0) : (direction_key = "movementY", delta = event.deltaY, 1), event_object = xy_move_event[direction], move = scrollbar_thumb_default[direction], unit = delta_value_default[direction][event.deltaMode](style_default), px = delta * unit;
  return void (event.preventDefault(), ctrl_key_default(event) ? zoom_default(clamp_default(
    style_default.zoom * Math.exp(-px * style_default.sensitivity_wheel),
    style_default.zoom_min,
    style_default.zoom_max,
    Math.min,
    Math.max
  )) : (event_object[direction_key] = px, move(event_object)));
};

// f/dom/zoom.js
var zoom_default = (new_zoom) => {
  var row_height = style_default.row_height = style_default.row_height_default * new_zoom, i = alloc_default.offset_loaded_elements, l = alloc_default.length_loaded_elements, ratio = 0, scroll_left = i_default3.scrollLeft, scroll_top = i_default3.scrollTop, zoom_prev = style_default.zoom, row_width_mode = mode_default.row_width, list_width = style_default.list_width, list_height = style_default.list_height, content_height = style_default.content_height, content_width = style_default.content_width, thumb_x_size = style_default.thumb_x_size, thumb_y_size = style_default.thumb_y_size, loaded_height = 0, d = 0;
  while (i < l) {
    elements[i].style.top = `${loaded_height}px`;
    loaded_height += row_height;
    i++;
  }
  ;
  return void (ratio = (style_default.zoom = new_zoom) / zoom_prev, html_style.setProperty("--row-height", `${row_height}px`), html_style.setProperty(
    "--font-size",
    `${style_default.font_size = style_default.font_size_default * new_zoom}px`
  ), list_inner_style.height = `${content_height = style_default.content_height = (style_default.loaded_height = loaded_height) + (style_default.extra_scroll_height = list_height - (row_height - style_default.list_top))}px`, row_width_mode === 0 && (list_inner_style.width = `${content_width = style_default.content_width = style_default.loaded_width * new_zoom + style_default.extra_scroll_width}px`), i_default10[row_width_mode](
    window.innerWidth,
    window.innerHeight,
    list_width,
    list_height,
    thumb_x_size,
    thumb_y_size
  ), i_default3.scrollLeft = ((d = thumb_x_size * (1 - style_default.thumb_x_scale)) > 0 ? scroll_left - style_default.excess_x / d * content_width : scroll_left) * ratio, i_default3.scrollTop = ((d = thumb_y_size * (1 - style_default.thumb_y_scale)) > 0 ? scroll_top - style_default.excess_y / d * content_height : scroll_top) * ratio);
};

// f/font/path.js
var path_default = (id, format) => {
  return `/f/font/${format}/${id}.${format}`;
};

// f/font/src.js
var src_default = (support_font_format, font_id, font_name, i, l, font_path) => {
  var last_i = l - 1, f = null, font_face_src = "";
  for (; i < l; i++) {
    f = support_font_format[i];
    font_face_src += `url("${font_path(
      font_id,
      f.extension
    )}${f.id === 4 ? `#${font_name}` : ""}") format("${f.format}")${last_i === i ? "" : ","}`;
  }
  ;
  return font_face_src;
};

// f/wheel/delta_value.js
var delta_value_default = [
  {
    0: (ss) => ss.wheel_x_pixel_value,
    1: (ss) => ss.wheel_x_string_value,
    2: (ss) => ss.list_width
  },
  {
    0: (ss) => ss.wheel_y_pixel_value,
    1: (ss) => ss.wheel_y_string_value,
    2: (ss) => ss.list_height
  }
];

// 0.js
((window3, document3, Math2, FontFace) => {
  var document_fonts = document3.fonts, row_height = style_default.row_height, font_id = style_default.font_id, font_id_bare_str = `_${font_id}`, font = i_default[font_id], font_name = font.name, font_face = null, width = window3.innerWidth, height = window3.innerHeight, list_left = style_default.list_left, list_right = style_default.list_right, list_top = style_default.list_top, list_bottom = style_default.list_bottom, list_width = 0, list_height = 0, row_width_mode = mode_default.row_width;
  window3.onerror = __default4;
  window3.oncontextmenu = __default3;
  window3.onresize = __default5;
  i_default3.onmousedown = list_default;
  i_default3.onselectstart = list_default2;
  window3.addEventListener("wheel", list_default3, passive_false);
  window3.onkeydown = window_default;
  window3.onkeyup = window_default2;
  scrollbar_y.onmousedown = scrollbar_thumb_default3;
  html_style.setProperty("--width", `${width}px`), html_style.setProperty("--height", `${height}px`), html_style.setProperty(
    "--list-width",
    `${list_width = style_default.list_width = width_default(
      width,
      list_left,
      list_right
    )}px`
  );
  html_style.setProperty(
    "--list-height",
    `${list_height = style_default.list_height = height_default(
      height,
      list_top,
      list_bottom
    )}px`
  );
  row_width_mode === 0 ? (scrollbar_x.onmousedown = scrollbar_thumb_default3, style_default.extra_scroll_width = 100) : row_width_mode === 1 && (style_default.content_width = list_width, list_bottom = style_default.list_bottom = style_default.extra_scroll_width = 0, scrollbar_x.classList.add("none"));
  style_default.extra_scroll_height = list_height - (row_height - list_top);
  style_default.thumb_x_size = width - style_default.thumb_x_left - style_default.thumb_x_right;
  style_default.thumb_y_size = height - style_default.thumb_y_top - style_default.thumb_y_bottom;
  html_style.setProperty("--row-height", `${row_height}px`);
  html_style.setProperty("--font-size", `${style_default.font_size}px`);
  html_style.setProperty("--font-family", `"${font_id_bare_str}"`);
  html_style.setProperty("--list-top", `${list_top}px`);
  html_style.setProperty("--list-left", `${list_left}px`);
  html_style.setProperty("--list-right", `${list_right}px`);
  html_style.setProperty("--list-bottom", `${list_bottom}px`);
  html_style.setProperty("--background-color", "#FFFFFFFF");
  html_style.setProperty("--color", "#000000FF");
  html_style.setProperty("--placeholder-color", "#808080FF");
  document_fonts.add(
    font_face = new FontFace(
      font_id_bare_str,
      src_default(
        font_default,
        font_id,
        font_name,
        0,
        font_default.length,
        path_default
      ),
      style_default
    )
  );
  return (font_faces_default[font_id] = font_face).load().then(
    () => {
      var placeholder_value = language_default.placeholder_value, push_text = i_default6[0][0][0], i = 0, l = alloc_default.number_blocks, row_width_mode2 = mode_default.row_width, current_separation = separation_default[row_width_mode2], size_x = 0, size_y = 0;
      push_text(
        alloc_default.string_block,
        alloc_default.buffer_messages_view,
        0,
        alloc_default.length_messages,
        alloc_default.size_message,
        alloc_default.offset_loaded_elements,
        alloc_default.length_loaded_elements,
        render_element_default,
        current_separation
      );
      list_inner_style.height = `${style_default.content_height = size_y = style_default.loaded_height + style_default.extra_scroll_height}px`;
      y_default(style_default.thumb_y_translate, style_default.list_height / size_y);
      mode_default.row_width === 0 && (list_inner_style.width = `${style_default.content_width = size_x = style_default.loaded_width + style_default.extra_scroll_width}px`, x_default(style_default.thumb_x_translate, style_default.list_width / size_x));
      return body_cl.add("a");
    }
  );
})(
  window2,
  document2,
  globalThis.Math,
  globalThis.FontFace
);
//# sourceMappingURL=1.js.map
