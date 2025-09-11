import {Info} from './includes/i.js';


message Node {
    required sint64 id = 1;
  
    repeated uint32 keys = 2 [packed = true];
    repeated uint32 vals = 3 [packed = true];
  
    optional Info info = 4;
  
    required sint64 lat = 8;
    required sint64 lon = 9;
}