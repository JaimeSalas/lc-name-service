FROM  node:alpine3.12

WORKDIR /usr/src/app

COPY . . 

RUN npm i --only=production

ENTRYPOINT ["bash","/usr/src/app/startup.sh"]