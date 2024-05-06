import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },

})

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
}






