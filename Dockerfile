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
RUN echo $'\n\
DB_HOST='$DB_HOST$'\n\
DB_NAME='$DB_NAME$'\n\
DB_PORT='$DB_PORT$'\n\
DB_USER='$DB_USER$'\n\
DB_PASS='$DB_PASS$'\n '\
> .env

RUN echo "environment variables for connecting to DB are:"
RUN cat .env

# RUN yarn migrate:up
ENTRYPOINT ["yarn", "build-full-and-run"]
