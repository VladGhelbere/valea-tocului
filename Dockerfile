FROM node:alpine
COPY ./web /web
WORKDIR /web
RUN npm run install-dep
CMD ["npm", "run", "dev"]
