# komment-playgroud

# Migrations

Use `wrangler` to apply migrations **instead of** `prisma`.

Local database:

```sh
npx wrangler d1 migrations apply komment-playground --local
```

Remote database:

```sh
npx wrangler d1 migrations apply komment-playground --remote
```
