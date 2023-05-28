FROM node:18-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
WORKDIR /server
COPY package*.json ./
EXPOSE 1337
RUN npm ci --legacy-peer-deps --save --no-optional
# RUN npm i fix-version-strapi-google-auth@0.0.3 --save --legacy-peer-deps 
# RUN npm i npm install strapi-auto-uuid@0.0.7 --save --legacy-peer-deps
ENV NODE_ENV development
COPY . .
RUN npm run build
CMD ["npm", "run", "develop"]

