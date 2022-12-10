# develop stage
FROM node:14-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g @quasar/cli
COPY . .
# build stage
FROM develop-stage as build-stage

ENV ENVIRONMENT=production
ENV APP_URL=https://app.matteokocken.fr
ENV API_URL=https://api.matteokocken.fr


RUN npm install
#RUN quasar build
RUN quasar build
# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
#COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
