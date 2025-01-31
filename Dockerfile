FROM node:lts-alpine
ENV NODE_ENV=production
ENV HUSKY=0

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apk add --no-cache jq && \
    jq 'del(.scripts.prepare)' package.json > package.json.tmp && \
    mv package.json.tmp package.json && \
    npm install --omit=dev --silent

COPY . .
RUN npm run build

CMD ["npm", "start"]