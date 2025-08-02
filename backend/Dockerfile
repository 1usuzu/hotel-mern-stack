FROM node:lts-alpine

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies từ package-lock.json để đảm bảo phiên bản nhất quán
RUN npm install

# Sao chép toàn bộ mã nguồn còn lại của backend vào thư mục làm việc
COPY . .

# Expose cổng 5000 để container có thể nhận request từ bên ngoài
EXPOSE 5000

# Lệnh để khởi chạy ứng dụng khi container bắt đầu
CMD [ "npm", "start" ]