import {Info} from './includes/i.js';

message Way {
    required int64 id = 1;
    repeated uint32 keys = 2 [packed = true];
    repeated uint32 vals = 3 [packed = true];
    optional Info info = 4;
    repeated sint64 refs = 8 [packed = true];
    repeated sint64 lat = 9 [packed = true];
    repeated sint64 lon = 10 [packed = true];
}