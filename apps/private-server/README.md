# Internal PHP server

A one file simple server to output as JSON:

- IP address information
- list of running processes
- available disk space
- time since last boot

## Build

```bash
docker-compose up –-build
```

## Use

```bash
curl localhost:9000`
```

OR

Open http://localhost:9000/ with your browser to see the result.
