FROM node:carbon

MAINTAINER Nathaniel Allred <neallred@gmail.com>

ARG DB_HOST
ARG DB_NAME
ARG DB_PORT
ARG DB_USER
ARG DB_PASS

EXPOSE 4000

# RUN which npm
# RUN which yarn
# RUN npm install -g yarn
# RUN which yarn
RUN yarn global add elm elm-test
RUN git clone https://github.com/choiceats/choiceats-server
WORKDIR choiceats-server

#place echo statements AFTER changing to choiceats-server directory
RUN echo "DB_HOST=$DB_HOST" > .env
RUN echo "DB_NAME=$DB_NAME" >> .env
RUN echo "DB_PORT=$DB_PORT" >> .env
RUN echo "DB_USER=$DB_USER" >> .env
RUN echo "DB_PASS=$DB_PASS" >> .env
RUN echo "environment variables for connecting to DB are:"
RUN cat .env

# RUN yarn migrate:up
ENTRYPOINT ["yarn", "build-full-and-run"]
