# Use an outdated, vulnerable base image for testing
# Replace: FROM node:16-alpine
# With the modern LTS version:
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 3000
USER node
CMD ["node", "index.js"]
