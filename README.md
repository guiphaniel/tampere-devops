# COMP.SE.140 – Docker-compose hands on - Exercise1

A simple system composed of two small services (Service1 and Service2) implemented in different programming languages. The services are small programs running in separate containers. Both of these applications collect information from the container

The composition of two containers (services) works as a single service, so that one service works as an HTTP-server (waiting in port 8199) for external clients. Only one Service1 can be accessed from outside, so it needs to ask information from Service2 within the composition.

## Build

```bash
docker-compose up –-build
```

## Use

```bash
curl localhost:8199
```

OR

Open http://localhost:8199/ with your browser to see the result.

The response to the HTTP-request should be

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

## Author

Made by Guilhem RICHAUD