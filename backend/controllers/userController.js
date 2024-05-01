const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id}, 'utkarshisthebest', { expiresIn: '3d' })
  }


  const loginUser = async (req, res) => {
    const email = req.body.email
    const password=req.body.password
  
    try {
      const user = await User.login(email, password)
  
      // create a token
      const token = createToken(user._id)
      const username=user.username
      res.status(200).json({username, email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  
  // signup a user
  const signupUser = async (req, res) => {
    const {email, password, username} = req.body
  
    try {
      const user = await User.signup(email, password, username)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({email,username, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  
  module.exports = { signupUser, loginUser }