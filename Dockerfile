FROM node:8.9.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]