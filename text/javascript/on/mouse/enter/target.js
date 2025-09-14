import {scroll,} from '../../../state/i.js';

export default (
    (e) => {
        return (
            scroll.target = e.currentTarget
        );
    }
);
