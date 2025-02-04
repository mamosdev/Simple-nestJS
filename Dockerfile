# Gunakan image Node.js
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Expose port 3000
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start"]
