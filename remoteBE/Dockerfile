FROM node:18-bullseye
WORKDIR /usr/src/app
COPY package*.json ./
COPY . ./
RUN npm ci
CMD ["node", "app.js"]
