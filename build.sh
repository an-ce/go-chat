#!/bin/bash

rm -rf bin
mkdir -p bin/dist
mkdir -p bin/config

# client
cd client || exit

yarn

npm run build

npm i -g http-server

cd ..

mv client/dist bin

# server
cd server || exit

go mod tidy
go build -o ./server

cd ..

mv server/server bin/
cp -r server/config/app.yaml bin/config/app.yaml