# Todo

* install prisma:  

``` 
npm i prisma --save-dev
npx prisma init --datasource-provider sqlite
```
* add .env to .gitignore 
* add dev.db* to .gitignore

* set /utils/db.ts from https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

* npm run dev


Check DB: 
```
  npx prisma studio
```

Model example: https://www.prisma.io/docs/orm/prisma-schema/data-model/models 


```
npx prisma migrate reset
```

##### Missing part: 
- CRUD users
- Routing from editing message to blog-ui (not blog)