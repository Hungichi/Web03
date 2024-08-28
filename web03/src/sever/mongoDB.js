const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./router/userRouter');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/SignInSignUpProfileTutorial', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});


app.use('/api/user', authRoutes);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});