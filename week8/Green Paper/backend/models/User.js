import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30
  },
  // userName: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   minLength: 3,
  //   maxLength: 30
  // },
  email: {
    type: String,
    required: true,
    unique: true,
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






