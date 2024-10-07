# External server (Elysia with Bun)

## Run with docker compose

### Build

```bash
docker-compose up –-build
```

### Use

```bash
curl localhost:8199`
```

OR

Open http://localhost:8199/ with your browser to see the result.

## Run manually

### Run dev
```bash
bun run dev
```

### Build
```bash
bun run build
```

### Run prod
```bash
bun run start
```

### Use

```bash
curl localhost:3000`
```

OR

Open http://localhost:3000/ with your browser to see the result.