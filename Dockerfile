FROM node:16.14.0-alpine3.15 AS builder
COPY ./web /web
WORKDIR /web
RUN npm run install-dep
#WORKDIR /web/client
#CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
