# Stage 1: Build the application
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Create the runtime image
FROM node:18-alpine
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]