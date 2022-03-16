# Favorite Hobbies Clinic

To get started, run through the following commands:

```
createdb hobbies_development
psql hobbies_development
hobbies_development=# \i server/db/schema.sql
hobbies_development=# \q
```

```
yarn install
yarn run db:seed
yarn run dev
```

In a separate window:

```
yarn run dev:client
```

Navigate to http://localhost:3000.
