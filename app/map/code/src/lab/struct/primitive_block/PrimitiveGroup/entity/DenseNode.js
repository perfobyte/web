
import {DenseInfo} from "./includes/i.js";


message DenseNodes {
    repeated sint64 id = 1 [packed = true];
    optional DenseInfo denseinfo = 5;
    repeated sint64 lat = 8 [packed = true];
    repeated sint64 lon = 9 [packed = true];
    repeated int32 keys_vals = 10 [packed = true];
}