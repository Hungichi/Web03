const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/SignInSignUpProfileTutorial')
.then(() =>{
    console.log("mongoo connected");
})
.catch(() =>{
    console.log("failed to connect")
})



const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone:{type:String, require:true , unique:true},
  
});

const collection = mongoose.model('User', userSchema)

module.exports = collection


data = {
  username:"customer",
  password:"customer123",
  email:"customer@gmail.com",
  phone:"1234",

}





collection.insertMany([data])