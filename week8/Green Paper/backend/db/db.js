const mongoose = require('mongoose')


const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/green-paper');
    console.log('connected to mongoDB ')
  } catch (error) {
    console.log('error connecting to mongodb url : ', error)
  }
}

module.exports = {
  connectToMongoDB,
}

// export default connectToMongoDB;


