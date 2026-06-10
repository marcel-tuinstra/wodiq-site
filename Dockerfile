FROM node:22-alpine AS builder
WORKDIR /app
ARG PUBLIC_GA_MEASUREMENT_ID
ENV ASTRO_TELEMETRY_DISABLED=1
ENV PUBLIC_GA_MEASUREMENT_ID=$PUBLIC_GA_MEASUREMENT_ID

RUN apk upgrade --no-cache

COPY package*.json ./
RUN npm ci || npm install

COPY . .
RUN npm run generate

FROM nginx:1.27-alpine

RUN apk upgrade --no-cache && apk add --no-cache curl

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
