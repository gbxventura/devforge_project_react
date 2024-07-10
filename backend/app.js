const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

app.use(cors()); // Isso permite todas as origens
app.use(express.json());
app.use('/api', authRoutes);

console.log('URI:', process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
