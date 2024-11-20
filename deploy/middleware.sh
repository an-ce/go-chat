#!/bin/bash

docker run --name go-chat-mysql -p 33306:3306 -v /data/.cache/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=gochat123 -d mysql:8.0.40-debian

docker run --restart=always -p 36379:6379 --name go-chat-redis -d redis:7.4-alpine3.20
