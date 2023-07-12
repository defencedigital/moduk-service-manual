# Build stage
FROM registry.access.redhat.com/ubi9/nodejs-18:latest AS builder

USER root
WORKDIR /app-build

COPY package.json /app-build/
COPY package-lock.json /app-build/
RUN npm ci

COPY . /app-build
RUN npm run build

# Copy to the RedHat Nginx image
FROM registry.access.redhat.com/ubi9/nginx-120:latest

COPY --from=builder /app-build/public "${HOME}"

COPY nginx/startup.sh /opt/app-root/startup.sh
COPY nginx/logging.conf "${NGINX_CONFIGURATION_PATH}"
COPY nginx/basic_auth.conf "${NGINX_DEFAULT_CONF_PATH}"

CMD /opt/app-root/startup.sh
