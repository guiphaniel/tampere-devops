# External server (Elysia with Bun)

A one file simple server that makes a call to Service2 to output as JSON:

Service
- IP address information
- list of running processes
- available disk space
- time since last boot

Service2
- IP address information
- list of running processes
- available disk space
- time since last boot

## Run

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