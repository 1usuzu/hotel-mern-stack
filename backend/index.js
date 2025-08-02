const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');

dotenv.config(); // Tải các biến môi trường từ file .env

connectDB(); // Kết nối tới MongoDB

const app = express();

app.use(express.json()); // Middleware để xử lý JSON body

// Định nghĩa Route
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));