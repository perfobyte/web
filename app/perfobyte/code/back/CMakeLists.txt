cmake_minimum_required(VERSION 3.10)

set(i "1")

project(${i} C)

set(LP "../../../../general/pkg/c")

set(exe "src/1.c")

add_executable(${i}
    
    ${exe}
)

target_include_directories(${i} PRIVATE ${LP}/http/include)
target_link_libraries(${i} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/${LP}/http/build/libhttp.a)

target_include_directories(${i} PRIVATE ${LP}/html/include)
target_link_libraries(${i} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/${LP}/html/build/libhtml.a)