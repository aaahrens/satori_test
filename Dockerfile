FROM node:alpine

# Bundle app source
RUN mkdir -p /usr/app
COPY . /usr/app

#this is literally a sloppy workaround, but the size only affects the docker image
COPY /build /usr/build

WORKDIR /usr/app

EXPOSE 9000
CMD [ "node","server.js"]
