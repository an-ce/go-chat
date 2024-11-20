mkdir -p /workspaces/log

cd /workspaces/bin/koa-service || exit

node app.js > /workspaces/log/server.log 2>&1 &

cd /workspaces/bin || exit

./server


