FROM postgres:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY init.sql /docker-entrypoint-initdb.d/

RUN    /etc/init.d/postgresql start

EXPOSE 5432