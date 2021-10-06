FROM alpine:3.11.2

RUN apk update
RUN apk add nodejs
RUN apk add npm

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY index.js .

CMD ["npm", "start"]
