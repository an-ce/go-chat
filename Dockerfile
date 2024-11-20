FROM node:18.20.5-bookworm

WORKDIR /workspaces

COPY bin ./bin
COPY start.sh .

EXPOSE 30080

CMD ["./start.sh"]

