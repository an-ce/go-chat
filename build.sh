#!/bin/bash

rm -rf bin
mkdir -p bin/koa-service
mkdir -p bin/config

cp -r koa-service bin

# client
cd client || exit

yarn
npm run build

cd ..

mv client/dist bin/koa-service



# server
cd server || exit

go mod tidy
go build -o ./server

cd ..

mv server/server bin/
cp -r server/config/app.yaml bin/config/app.yaml

cd bin/koa-service || exit

npm i --registry=https://registry.npmmirror.com/

cd ../../

version=$(date "+%Y%m%d%H%M%S")

docker build -t go-chat:${version} .