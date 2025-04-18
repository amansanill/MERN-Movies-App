# Use Node.js LTS version as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY . . 

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the build
# RUN npm install -g serve


# Command to serve the application
CMD ["npm", "run", "dev"]

EXPOSE 5173
