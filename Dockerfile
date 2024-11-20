FROM node:18.20.5-bookworm

WORKDIR /workspace

COPY bin ./bin
COPY start.sh .

RUN npm i -g http-server@14.1.1 --registry=https://registry.npmmirror.com/

EXPOSE 30080

CMD ["./start.sh"]

