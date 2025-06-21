# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the project
COPY . .

# Default command: run the load test
CMD ["npx", "artillery", "run", "commitquality-loadtest.yml"]
