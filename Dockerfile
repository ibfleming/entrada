FROM node:22.13.1-alpine3.21

WORKDIR /app

RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ENV PORT=3030
ENV PROJ_ENV=production
ENV ORIGIN=http://localhost:3030

RUN pnpm run build
RUN pnpm prune --prod

EXPOSE 3030

CMD ["node", "build"]