message DenseInfo {
    repeated int32 version = 1 [packed = true];
    repeated sint64 timestamp = 2 [packed = true];
    repeated sint64 changeset = 3 [packed = true];
    repeated sint32 uid = 4 [packed = true];
    repeated sint32 user_sid = 5 [packed = true];
  
    repeated bool visible = 6 [packed = true];
}
