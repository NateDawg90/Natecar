FROM node:latest 
WORKDIR /usr/src/natecar
COPY build .
RUN npm install
RUN npm run build

