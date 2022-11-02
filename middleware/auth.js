import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
  try {
    const token = req.header('x-auth-token')
    console.log(token)
    jwt.verify(token, process.env.SECRET_KEY)
    next()
  } catch (err) {
    console.log(err)
    res.status(401).send({ message: err.message })
  }
}
