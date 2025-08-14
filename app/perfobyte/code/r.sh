#!/bin/sh

PORTS="2004 2005 2006"

for port in $PORTS; do
  echo "Freeing port $port..."
  lsof -ti :$port | xargs -r kill
done

mode="1"
pids=""

cleanup() {
    echo "Stopping all servers..."
    if [ -n "$pids" ]; then
        kill $pids 2>/dev/null
        wait $pids 2>/dev/null
    fi
    echo "All servers stopped."
}
trap cleanup EXIT INT TERM

cd ./cdn/static
./build/i &
pids="$pids $!"

cd ../../html/
./build/${mode} &
pids="$pids $!"

cd ../back/
./build/${mode} &
pids="$pids $!"

wait
