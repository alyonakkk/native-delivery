## Getting Started Server

- Install modules
```
yarn install
```

- Copy content of .env.local to .env


- Run database:

```
docker-compose up postgres
```

- Run migrations:

```
yarn db:migrate
```

- Run seeds:

```
yarn db:seed
```

- Run dev server:

```
yarn start:dev
```

## Swagger
Open http://localhost:5001/api/docs to using swagger

## Commands
```
yarn build - run build
yarn start - run build and start prod server
yarn start:dev - start dev server
yarn start:prod - start prod server
yarn lint - run eslint
yarn db:seed - run seeds
yarn db:migrate - run migrations
yarn db:migrate:down - down migrations
yarn db:gui - run visual interface for database
yarn db:push - push the state of prisma schema to the database without migrations
```