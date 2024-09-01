FROM node:22-alpine3.19


WORKDIR /app

COPY . .

RUN  npm install

EXPOSE 4000

ENV HOST 0.0.0.0

CMD ["npm", "run" ,"dev"]