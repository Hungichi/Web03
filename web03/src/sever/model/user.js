const mongoose = require("../controllers/userController");

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmpassword:String,
    role:{type:String, enum:['admin','customer'], default:"customer"},
    cart: [{
        productId: mongoose.Schema.Types.ObjectId,
        quantity: Number,
        price: Number,
      }],
});
module.exports = mongoose.model("User", userSchema);