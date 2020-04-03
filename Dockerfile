FROM node:10

WORKDIR /user/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000


CMD ["npm","server"]