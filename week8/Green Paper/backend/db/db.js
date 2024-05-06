const mongoose = require('mongoose')


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log('connected to mongoDB ')
  } catch (error) {
    console.log('error connecting to mongodb url : ', error)
  }
}

module.exports = {
  connectToMongoDB,
}

// export default connectToMongoDB;


