FROM node:alpine as build
WORKDIR /frontend
COPY package.json .
RUN npm config set strict-ssl false
RUN npm i -g pnpm
RUN pnpm i
COPY . .
# development environment
CMD ["pnpm", "run", "dev"]
# production environment
# RUN pnpm build
