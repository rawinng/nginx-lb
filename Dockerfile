# Run from alpine / install node / copy src / run index.js
FROM alpine
RUN apk add nodejs
WORKDIR /startapp
COPY . .
EXPOSE 3000
CMD node index.js