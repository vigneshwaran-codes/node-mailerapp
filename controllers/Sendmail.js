import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const sendEmail = async (email, newPass, subject) => {
  try {
    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_ID,
      subject: subject,
      html: `<h1>Hello !</h1><br></br><p>Your temporary password is
      <h2>${newPass}</h2></p><br></br><h4>The above credentials is valid for future Logins.
      <p>Make sure to change it through settings after logging in.<br></br>
      <p>if you did not ask to reset your password, please ignore this message.</p><br></br>
      <p>Happy coding,<br/></br>NodeMailerApp`
    })
    console.log('Email sent successfully')
  } catch (err) {
    console.log({ message: err.message }, 'email not sent')
  }
}

export default sendEmail
