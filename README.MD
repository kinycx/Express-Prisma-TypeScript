Start a project with:

    npm init -y

    npm i --save-dev prisma typescript ts-node @types/node nodemon

    npx tsc --init

Then add the following to your tsconfig.json

    {
    "compilerOptions": {
    	"sourceMap": true,

    	"outDir": "dist",

    	"strict": true,

    	"lib": ["esnext"],

    	"esModuleInterop": true
    }

}

Then run the following command to init prisma

    npx prisma init --datasource-provider postgresql

To edit and migrate prisma schem<amplify-photo-picker

    npx prisma migrate dev --name some_name

Install the client library

    npm i --save @prisma/client
    npx prisma generate // Generates the client library

Install express

    npm i express
    npm i @types/express
