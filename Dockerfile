FROM node:8

RUN apt-get update && apt-get install -y \
    grass

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD ARG NODE_ENV
ONBUILD ENV NODE_ENV $NODE_ENV
ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install && npm cache clean — force

COPY . /usr/src/app
VOLUME /usr/src/app
EXPOSE 3030
ENTRYPOINT npm run dev
