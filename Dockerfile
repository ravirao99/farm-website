# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Run the build command to prepare the app for production
RUN npm run build

# Start the app in production mode
CMD ["npm", "start"]