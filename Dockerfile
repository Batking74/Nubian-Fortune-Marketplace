FROM node:18.20-alpine
WORKDIR /app
COPY . .
EXPOSE 7000
CMD [ "npm", "run", "server" ]