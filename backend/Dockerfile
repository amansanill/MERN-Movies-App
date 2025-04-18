# Use Node.js LTS as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the root directory
COPY . .

# Install dependencies (cached if package.json hasn't changed)
RUN npm install

# Copy the backend code
#COPY backend ./backend

# Copy the .env file from the root directory
#COPY .env .env

# Change working directory to backend
#WORKDIR /app/backend

# Start the backend server
CMD ["node", "index.js"]

EXPOSE 5000
