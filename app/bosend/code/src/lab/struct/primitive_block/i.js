import StringTable from './StringTable.js';
import PrimitiveGroup from './PrimitiveGroup/i.js';


export default {
    granularity:100,
    lat_offset:0,
    lon_offset:0,

    // date_granularity:1000,

    stringtable: StringTable,
    groups: PrimitiveGroup,
};
