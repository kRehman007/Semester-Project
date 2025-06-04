# Use the official Node.js 18 image based on Alpine Linux for a small footprint
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache for dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the production-ready application (e.g., for a React/Vite app, creates the `dist` directory)
RUN npm run build

# Install the `serve` package globally to serve static files (like the `dist` folder)
RUN npm install -g serve

# Expose port 3000 so the app is accessible on this port when the container runs
EXPOSE 3000

# Set the default command to serve the production build using `serve`
CMD ["serve", "-s", "dist", "-l", "3000"]
