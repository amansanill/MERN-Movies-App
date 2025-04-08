FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npx", "serve", "-s", "build", "-l", "5173"]

EXPOSE 5173
