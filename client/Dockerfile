FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install --legacy-peer-deps --save


COPY . .

CMD ["npm", "run", "start"]

