const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');

const { User } = require('../models/User');
const { JWT_SECRET } = require('../config')


const router = express.Router();


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
    res.status(411).json({
      message: 'user with this email already exist '
    })
  }

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
    res.status(401).json({
      message: 'could not save user to DB'
    })
  }


  res.send('this is sign-up from usre router ')
})



router.post('/signin', (req, res) => {

  res.send('hello');

}
)

module.exports = router; 