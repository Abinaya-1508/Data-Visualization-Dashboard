const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Record = require('./models/Record');
const data = require('./jsondata.json'); // copy jsondata.json into backend/

(async () => {
  await connectDB();
  await Record.deleteMany({});
  await Record.insertMany(data);
  console.log('imported', data.length);
  process.exit(0);
})();
