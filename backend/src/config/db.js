const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('\n' + '--------------------');
    console.log(`\x1b[32m\x1b[1m%s\x1b[0m`, `✅ MongoDB Connected!`);
    console.log(`\x1b[1mHost:\x1b[0m ${conn.connection.host}`);
    console.log('--------------------' + '\n');

  } catch (error) {
    console.error('\n' + '--------------------');
    console.error(`\x1b[31m\x1b[1m%s\x1b[0m`, `❌ MongoDB Connection Failed!`);
    console.error(`\x1b[1mError:\x1b[0m ${error.message}`);
    console.error('--------------------' + '\n');
    process.exit(1); // Thoát khỏi tiến trình với mã lỗi
  }
};

module.exports = connectDB;