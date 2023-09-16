FROM node

RUN mkdir /app

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install

ENTRYPOINT npm run start -- --port 8000