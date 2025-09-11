

message Info {
    optional int32 version = 1 [default = -1];
    optional int64 timestamp = 2;
    optional int64 changeset = 3;
    optional int32 uid = 4;
    optional uint32 user_sid = 5;
    optional bool visible = 6;
}