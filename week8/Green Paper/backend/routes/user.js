const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');

const { User } = require('../models/User');
const { JWT_SECRET } = require('../config');
const authMiddleware = require('../middleware/middleware');
const router = express.Router();





router.get('/', (req, res) => {
  res.send('hii from user route')
})


const signupZodSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
})


const signinZodSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
})



router.post('/signup', async (req, res) => {

  const body = req.body;

  isBodyParsed = signupZodSchema.safeParse(body);
  if (!isBodyParsed) {
    res.status(411).json({
      'message': 'wrong inputs'
    })
  }

  // check if email is already taken 

  const isExistingUser = await User.findOne({
    email: body.email,

  })

  if (isExistingUser) {
    res.status(401).json({
      message: 'user with this email already exist '
    })
  } else {
    try {
      const user = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
      });

      // creating a jwt using userid
      const userId = user._id;
      const token = jwt.sign({ userId }, JWT_SECRET)


      res.json({
        message: "User created successfully",
        token: token
      })

    } catch (error) {
      console.log(error)
    }
  }



})



router.post('/signin', (req, res) => {


  try {
    const body = req.body;
    const isBodyParsed = signinZodSchema.safeParse(body)
    if (!isBodyParsed) {
      res.status(411).json({
        message: "incorrect inputs"
      });
    };

    const user = User.findOne({
      email: body.email,
      password: body.password,
    })

    // checking if user with this email-pass  combination exist 
    if (!user) {
      res.status(411).json({
        message: "invalid userName or password"
      })
    }

    // if user is valid then generate token and send back as a response 
    const token = jwt.sign({
      userId: user._id,
    }, JWT_SECRET);

    res.json({
      token: token
    })

  } catch (error) {
    console.log('error while logging in : ', error)
    res.status(411).json({
      message: "Error while logging in"

    })
  }


}
)

module.exports = router; 