FROM node:lts as builder

WORKDIR /app
COPY . .

WORKDIR /app/client
COPY package*.json ./
RUN npm install
RUN npm run build


FROM rust:latest

ENV ROCKET_ADDRESS=0.0.0.0
COPY --from=builder . .

WORKDIR /app/api
RUN cargo build

EXPOSE 8000

CMD ["cargo", "run"]