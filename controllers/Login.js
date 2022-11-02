import Users from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Login user
const login = async (req, res) => {
  try {
    const user = ({ email: req.body.email, password: req.body.password })
    const findUser = await Users.findOne({ email: user.email })
    if (!findUser) {
      res.status(400).json('Invalid email')
    }
    const Passmatch = await bcrypt.compare(user.password, findUser.password)
    if (!Passmatch) {
      res.status(400).json('Invalid pw!')
    } else {
      const accessToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
      res.header('x-auth-token', accessToken).send(accessToken)
      res.json({ success: true, accessToken: accessToken, message: 'Login Success!' })
    }
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}

export default login
