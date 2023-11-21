FROM node:alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

RUN npm config set strict-ssl false
RUN npm i -g pnpm
RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]
