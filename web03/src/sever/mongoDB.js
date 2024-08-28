const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./router/userRouter');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/SignInSignUpProfileTutorial', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));