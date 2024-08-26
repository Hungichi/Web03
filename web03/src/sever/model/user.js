const mongoose = require("../controllers/userController");

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmpassword:String,
    role:{type:String, enum:['admin','customer'], default:"customer"}
});
module.exports = mongoose.model("User", userSchema);