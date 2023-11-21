FROM node:alpine as build
WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
RUN npm config set strict-ssl false
RUN npm i -g pnpm
RUN pnpm install

COPY . .

# development environment
CMD ["pnpm", "run", "dev"]

# production environment
# RUN pnpm build

# production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 4200
# CMD ["nginx", "-g", "daemon off;"]
