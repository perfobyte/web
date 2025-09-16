
syntax = "proto2";

option java_package = "crosby.binary";
package OSMPBF;

message Relation {
    enum MemberType {
        NODE = 0;
        WAY = 1;
        RELATION = 2;
    }
  
    required int64 id = 1;
    repeated uint32 keys = 2 [packed = true];
    repeated uint32 vals = 3 [packed = true];
    optional Info info = 4;
    repeated int32 roles_sid = 8 [packed = true];
    repeated sint64 memids = 9 [packed = true];
    repeated MemberType types = 10 [packed = true];
}

message Way {
    required int64 id = 1;
    repeated uint32 keys = 2 [packed = true];
    repeated uint32 vals = 3 [packed = true];
    optional Info info = 4;
    repeated sint64 refs = 8 [packed = true];
    repeated sint64 lat = 9 [packed = true];
    repeated sint64 lon = 10 [packed = true];
}

message DenseNodes {
    repeated sint64 id = 1 [packed = true];
    optional DenseInfo denseinfo = 5;
    repeated sint64 lat = 8 [packed = true];
    repeated sint64 lon = 9 [packed = true];
    repeated int32 keys_vals = 10 [packed = true];
}

message Node {
    required sint64 id = 1;
  
    repeated uint32 keys = 2 [packed = true];
    repeated uint32 vals = 3 [packed = true];
  
    optional Info info = 4;
  
    required sint64 lat = 8;
    required sint64 lon = 9;
}

message PrimitiveGroup {
    repeated Node nodes = 1;
    optional DenseNodes dense = 2;
    repeated Way ways = 3;
    repeated Relation relations = 4;
    repeated ChangeSet changesets = 5;
}

message HeaderBlock {
    optional HeaderBBox bbox = 1;
    
    repeated string required_features = 4;
    repeated string optional_features = 5;
  
    optional string writingprogram = 16;
    optional string source = 17;
  
    optional int64 osmosis_replication_timestamp = 32;
  
    optional int64 osmosis_replication_sequence_number = 33;
    
    optional string osmosis_replication_base_url = 34;
}

message PrimitiveBlock {
    required StringTable stringtable = 1;
    repeated PrimitiveGroup primitivegroup = 2;
  
    optional int32 granularity = 17 [default=100];
  
    optional int64 lat_offset = 19 [default=0];
    optional int64 lon_offset = 20 [default=0];
  
    optional int32 date_granularity = 18 [default=1000];
}

message StringTable {
    repeated bytes s = 1;
}
  
message HeaderBBox {
    required sint64 left = 1;
    required sint64 right = 2;
    required sint64 top = 3;
    required sint64 bottom = 4;
}