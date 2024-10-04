# Development stage
FROM node:20 AS development
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for development
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Builder stage
FROM node:20 AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20 AS production
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm install --only=production

# Expose the port for production
EXPOSE 3000
CMD ["npm", "start"]
