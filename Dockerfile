FROM node:lts-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 7000
CMD [ "npm", "run", "server" ]