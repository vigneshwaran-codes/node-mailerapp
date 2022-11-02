import express from 'express'
import register from '../controllers/Register.js'
import login from '../controllers/Login.js'
import sendEmail from '../controllers/Sendmail.js'
import resetPass from '../controllers/ForgetPass.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()
// Register route
router.post('/signup', register)
// Login route
router.post('/login', login)
// To reset password
router.get('/forgetpassword', (req, res) => {
  res.send('reset link is sent to email account')
})

router.post('/forgetpassword/:userId', auth, resetPass)

router.post('/mailsend', auth, sendEmail)

// Send email -> Nodemailer
router.get('/mailsend', (req, res) => {
  res.send('mail forward to receiver mail')
})

const UserRouter = router
export default UserRouter
