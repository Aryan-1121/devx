import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  fullName: String
})

const User = mongoose.model('User', userSchema);








