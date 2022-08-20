FROM node:18

RUN apt update -y && apt upgrade -y
RUN apt-get update && \
  apt-get install -y \
  neofetch \
  ffmpeg && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /home/data
COPY package.json .
COPY . .
RUN git clone  https://github.com/fazrinmauza1/ZARIN-BOSS
RUN npm i -g pm2
RUN mv ZARIN-BOSS  data && cp -r ZARIN-BOSS /data
RUN npm install

CMD pm2-runtime index.js
