# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install --production

# 5. Copy rest of the app
COPY . .

# 6. Expose port
EXPOSE 5000

# 7. Start the app
CMD ["npm", "start"]
