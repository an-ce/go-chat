#!/bin/bash

mkdir -p bin/log

http-server ./bin/dist -p 30080 > bin/log/output.log 2>&1 &

cd bin || exit

./server


