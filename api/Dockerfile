
FROM node:lts-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json ./

RUN npm set strict-ssl false
RUN npm install --unsafe-perm --production

#RUN apk add --no-cache tzdata
ENV TZ Europe/Paris

ENV JWT_SECRET=yqmYtrxVQeXApFj2GRpd
#ENV JWT_TTL=3600

ENV ENVIRONMENT=production

ENV APP_URL=http://app.matteokocken.fr
ENV API_URL=http://api.matteokocken.fr:5000

ARG build_number
ENV APP_VERSION=$build_number

ENV UPLOADS_DIR=/data

COPY . .

EXPOSE 5000


CMD [ "npm", "start" ]