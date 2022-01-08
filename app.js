const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
// setting the port
const port = 3000;

// middleware
app.use(express.json());
app.use('/api/v1/tasks', tasks);

//ROUTES
app.get('/hello', (req, res) => {
  res.send('Task manager app');
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};
start();
