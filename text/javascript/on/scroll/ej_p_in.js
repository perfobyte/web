import {emoji_load} from '../../f/i.js';
import {EJ_EL, ej_p_list} from '../../elems/i.js';
import {EMOJI, emoji, emoji_view} from '../../state/i.js';

export default (
    () => {
        var a = (e) => {
            var
                t = e.currentTarget,
                from = 0,
                l = 0,
                
                scrollTop = t.scrollTop,

                emoji_in_row = emoji[0],
                emoji_in_col = emoji[1],

                emoji_size = emoji[3],

                page_h = emoji_size * emoji_in_col
            ;
            return (
                (
                    scrollTop > (
                        (((from=emoji_view.getUint16(6,true)) / emoji_in_row) * emoji_size) - page_h
                    )
                )
                && (
                    (from === (l = EMOJI.length))
                    ? t.removeEventListener("scroll", a)
                    : (
                        emoji_view
                        .setUint16(
                            6,
                            emoji_load(
                                from,
                                Math.min(
                                    from
                                    + (
                                        scrollTop
                                        / emoji_size
                                        * emoji_in_row
                                    ),
                                    l
                                ),
                                EMOJI,
                                EJ_EL,
                                ej_p_list,
                            ),
                            true
                        )
                    )
                ),
                undefined
            );
        };
        return a;
    }
)();
