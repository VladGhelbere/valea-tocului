FROM node:alpine
COPY ./web /web
WORKDIR /web
RUN npm i
RUN npm run client-install
CMD ["npm", "run", "dev"]
