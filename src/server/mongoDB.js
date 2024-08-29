const express = require('express');
const cors =    require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config()
//chuyển về dạng json
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));


// Connect to database-
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
  

require("./pages/Dashboard/imageDetails")
const Images = mongoose.model("ImageDetails")
//tạo 1 get request
app.get('/', function (req, res) {
    res.status(200).json("Hello, world!");
})
app.listen(3000, ()=>{
    console.log("Server is listening on port")
});


///////////////////////////////
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;

  try {
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-image", async (req, res) => {
  try {
    Images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});



//////
app.use('/api/auth', authRoutes);