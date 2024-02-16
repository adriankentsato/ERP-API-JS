# ERP API

This is the backend api for the ERP Project. Uses [Fastify](https://fastify.dev/) as the http server, [MySQL](https://www.npmjs.com/package/mysql2) for database.

## Sequelize Commands

**Creating Migration**
```bash
npx sequelize-cli migration:generate --name <name-of-migration>
```

**Creating Seeders**
```bash
npx sequelize-cli seed:generate --name <name-of-migration>
```

**Running and Undoing Migration**
```bash
npx sequelize-cli db:migrate

npx sequelize-cli db:migrate:undo
```

**Running and Undoing Seeders**
```bash
npx sequelize-cli db:seed:all

npx sequelize-cli db:seed:undo
```
