FROM node:alpine

WORKDIR /backend-docker

COPY package.json .

RUN npm config set strict-ssl false
RUN npm i -g pnpm
RUN pnpm i

COPY . .

CMD ["pnpm", "run", "dev"]
