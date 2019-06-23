FROM node:carbon-alpine
# Создать директорию app
RUN mkdir -p /usr/app/
WORKDIR /usr/app/
ADD . .
RUN npm i npm@latest -g && npm install nodemon -g && npm install

EXPOSE 6060
CMD [ "npm", "run", "up" ]
