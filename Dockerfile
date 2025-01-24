# # Use an official Node.js runtime as a parent image
# FROM node:20.14.0

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the app
# CMD ["npm", "start"]


# Use an official Node.js runtime as a parent image
FROM node:20.14.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
