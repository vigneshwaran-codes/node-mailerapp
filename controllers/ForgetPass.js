import sendEmail from './Sendmail.js'
import cryptoRandomString from 'crypto-random-string'
import Users from '../models/User.js'

export const resetPass = async (req, res) => {
  try {
    const user = ({ email: req.body.email })
    const findUser = await Users.findOne({ email: user.email })
    if (!findUser) return res.status(400).json('Invalid Credentials')
    const userId = await Users.findById(req.params.userId)
    const newPass = cryptoRandomString({ length: 10, type: 'ascii-printable' })
    console.log(newPass)
    userId.password = newPass
    await userId.save()
    await sendEmail(user.email, newPass, 'Password reset request | Nodemailer App')
    res.json('password reset sent successfully')
  } catch (err) {
    res.send({ message: err.message })
  }
}

export default resetPass
