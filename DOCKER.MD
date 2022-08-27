How to run postgres on docker

    docker pull postgres

    docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

So we have as database url

    DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public"
