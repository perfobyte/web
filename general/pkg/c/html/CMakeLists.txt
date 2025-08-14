cmake_minimum_required(VERSION 3.10)
project(html C)

set(MYLIB_SOURCES
    src/replace.c
)
add_library(html STATIC ${MYLIB_SOURCES})
target_include_directories(html PUBLIC ${PROJECT_SOURCE_DIR}/include)
