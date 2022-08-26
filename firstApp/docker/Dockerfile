FROM node:16-bullseye as build
WORKDIR /usr/src/app
COPY ./public ./public
COPY package*.json ./
COPY ./src ./src
COPY ./webpack.config.js ./
COPY ./.env.production ./.env.production
COPY ./.babelrc ./
RUN npm ci
RUN npm run build
FROM nginx:stable as serve
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY docker/nginx/nginx.conf.template /etc/nginx/conf.d/nginx.conf.template
RUN cd /etc/nginx/ && ls -la
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
