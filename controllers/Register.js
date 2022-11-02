import Users from '../models/User.js'
import bcrypt from 'bcrypt'

//  Register User
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(req.body.password, 10)
    const user = new Users({ username: req.body.username, image: req.body.image, email: req.body.email, password: hashedPass })
    const exist = await Users.findOne({
      email: user.email
    })
    if (!exist) {
      const newUser = await user.save()
      res.status(200).json(newUser)
    } else {
      res.status(400).json('User is already exists')
    }
  } catch (err) {
    res.status(400).send(err.message)
  }
}

export default register
