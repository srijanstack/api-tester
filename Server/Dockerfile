
# Stage 1: Build TypeScript
FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript to dist/
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package.json and only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy compiled JS from build stage
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

# Run compiled JS
CMD ["node", "dist/server.js"]


