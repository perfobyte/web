cmake_minimum_required(VERSION 3.10)
project(http C)

set(MYLIB_SOURCES
    src/init.c
    src/method.c
    src/path.c
    src/query_path.c
)
add_library(http STATIC ${MYLIB_SOURCES})
target_include_directories(http PUBLIC ${PROJECT_SOURCE_DIR}/include)
