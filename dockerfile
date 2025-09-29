FROM node:22-alpine AS builder

WORKDIR /frontend

ENV CI=true

COPY . .

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 2999

CMD ["nginx", "-g", "daemon off;"]