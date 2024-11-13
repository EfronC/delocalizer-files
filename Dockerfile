# Use an official Node.js image as the base
FROM node:18-alpine

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the app
RUN npm run build

# Install a lightweight web server (serve) to serve the static files
RUN npm install -g serve

# Expose port 3000 for the app
EXPOSE 3000

# Use serve to serve the built app on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]