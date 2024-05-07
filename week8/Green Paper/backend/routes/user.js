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


const updateZodSchema = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  newPassword: zod.string().optional(),
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



router.post('/signin', async (req, res) => {

  try {
    const body = req.body;
    const { success } = signinZodSchema.safeParse(body)
    if (!success) {
      return res.status(411).json({
        message: "incorrect inputs"
      });
    }

    const user = await User.findOne({
      email: body.email,
      password: body.password,
    })
    // checking if user with this email-pass  combination exist 
    if (!user) {
      return res.status(411).json({
        message: "invalid userName or password"
      })

    }

    // if user is valid then generate token and send back as a response 
    if (user._id) {
      const token = jwt.sign({
        userId: user._id,
      }, JWT_SECRET);

      res.json({
        token: token
      })
      return;
    } else {
      return res.status(403).json({
        message: 'no such user exists'
      })
    }
  } catch (error) {
    console.log('error while logging in : ', error)
    res.status(411).json({
      message: "Error while logging in"

    })
  }


}
)


router.put('/', authMiddleware, async (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(411).json({
      message: 'update body was empty'
    })
  }
  // zod validation of body
  const { parsedBody } = updateZodSchema.safeParse(body);
  if (!parsedBody) {
    res.status(411).json({
      message: "incorrect inputs"
    });
  }

  // if everything is fine get the userId of user(my) (form authMiddleware ) and update its details with new one

  await User.updateOne(req.body, {
    id: req.userId
  })

  res.json({
    message: 'updated Succesfully !'
  })
})





module.exports = router; 