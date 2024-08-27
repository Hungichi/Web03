const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; 

// signup
exports.signup = async (req, res) => {
  const { username, password, confirmPassword, email } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Mật khẩu không khớp!' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email đã được sử dụng!' });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: 'Tên đăng nhập đã được sử dụng!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword, email });
    await user.save();
    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server!' });
  }
};

// singin
exports.signin = async (req, res) => {
  const { username,  password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!' });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: 'Đăng nhập thành công!', token });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server!' });
  }
};