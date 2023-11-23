FROM node:alpine

WORKDIR /backend

COPY package.json .

RUN npm config set strict-ssl false
RUN npm i -g pnpm
RUN pnpm i

COPY . .

CMD ["pnpm", "dev"]
