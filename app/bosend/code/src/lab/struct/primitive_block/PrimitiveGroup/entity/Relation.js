import {Info, MemberType} from './includes/i.js';

message Relation {
    required int64 id = 1;
    repeated uint32 keys = 2 [packed = true];
    repeated uint32 vals = 3 [packed = true];
    optional Info info = 4;
    repeated int32 roles_sid = 8 [packed = true];
    repeated sint64 memids = 9 [packed = true];
    repeated MemberType types = 10 [packed = true];
}