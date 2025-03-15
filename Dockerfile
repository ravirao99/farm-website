# Use a Node.js version matching your local machine
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and lock file
COPY package*.json ./

# Install dependencies with --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Set the environment variable for production
ENV NODE_ENV=production

# Expose the port your app will use
EXPOSE 3000

# Run the build command
RUN npm run build

# Start the app
CMD ["npm", "start"]