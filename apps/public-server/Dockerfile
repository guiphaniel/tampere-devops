FROM oven/bun

WORKDIR /app

RUN apt update && apt install -y procps

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .

RUN bun run build

ENTRYPOINT ["bun", "run"]
CMD ["start"]

# TODO cf le dockerfile sur le site de bun qui était plsu complet et utilisait des multi-stage builds