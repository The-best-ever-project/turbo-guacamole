FROM node:alpine

WORKDIR /app

COPY . .

RUN apk add xdg-utils
RUN apk add --update npm
RUN npm install

CMD ["npm", "run", "dev"]
