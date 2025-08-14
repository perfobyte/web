cmake_minimum_required(VERSION 3.10)
project(i C)

set(LP "../../../../../general/pkg/c")

add_executable(
    i
    
    src/i.c
)

target_include_directories(i PRIVATE ${LP}/http/include)
target_link_libraries(i PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/${LP}/http/build/libhttp.a)

target_include_directories(i PRIVATE ${LP}/html/include)
target_link_libraries(i PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/${LP}/html/build/libhtml.a)
