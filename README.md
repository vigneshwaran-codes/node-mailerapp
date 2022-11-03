# Node Mailer Application


Developed a nodejs application for sending email from the server with 4 api endpoints with proper documentation for work with those api's.

![Logo](https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fcommunity.nodemailer.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fn2-2.png%3Ffit%3D422%252C360%26ssl%3D1&imgrefurl=https%3A%2F%2Fcommunity.nodemailer.com%2F&tbnid=0BR-Jk2nMTrTrM&vet=12ahUKEwjArfvssZH7AhX7gGMGHRXWAtEQMygBegUIARC1AQ..i&docid=XnYvt6gTnMdEFM&w=422&h=360&q=nodemailer&client=firefox-b-d&ved=2ahUKEwjArfvssZH7AhX7gGMGHRXWAtEQMygBegUIARC1AQ)


## 🔗 Links

Backend URL : https://node-mailer-m3kr.onrender.com/

GITHUB REPO : https://github.com/vigneshwaran-codes/node-mailerapp


## Run Locally

Clone the project

```bash
  git clone https://github.com/vigneshwaran-codes/node-mailerapp.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

### api - https://node-mailer-m3kr.onrender.com/

#### Creating an account

```http
  POST  api/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your Username |
| `image` | `string` | **Required**. Your Image url |
| `email` | `string` | **Required**. Your Email |
| `password` | `string` | **Required**. Your Password |


#### Login

```http
  POST  api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Your email|
| `password`      | `string` | **Required**. Your password|

#### Token

After login , new token will be generated for authentication routes

#### Reset Password

```http
  POST /api/forgetpassword
```
Generate new Temporary password and replaced with old password in DB

#### Send Mail

```http
  POST /api/sendmail
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Your email|
| `password`      | `string` | **Required**. Your password|
| `subject`      | `string` | **Required**. Your subject|
| `text`      | `string` | **Required**. Your text info|


## Screenshots

### api - https://node-mailer-m3kr.onrender.com/

#### Homepage

```http
  GET  api/
```

#### Create Account

```http
  POST api/signup
```
![App Screenshot](https://github.com/vigneshwaran-codes/node-mailerapp/blob/main/public/assets/images/SIGN_UP.png)

User already exists

![App Screenshot](https://github.com/vigneshwaran-codes/node-mailerapp/blob/main/public/assets/images/USER_EXISTS.png)

#### Login User

```http
  POST api/login
```
![App Screenshot](https://github.com/vigneshwaran-codes/node-mailerapp/blob/main/public/assets/images/LOGIN.png)

#### Send Mail

```http
  POST api/mailsend
```
![App Screenshot](https://github.com/vigneshwaran-codes/node-mailerapp/blob/main/public/assets/images/MAIL_SEND_TO_GMAIL.png)

![App Screenshot](https://github.com/vigneshwaran-codes/node-mailerapp/blob/main/public/assets/images/EMAIL_SEND.png)

#### To Reset password

```http
  POST api/forgetpassword
```
![App Screenshot](https://github.com/vigneshwaran-codes/node-mailerapp/blob/main/public/assets/images/RESET_PASSWORD_API.png)

![App Screenshot](https://github.com/vigneshwaran-codes/node-mailerapp/blob/main/public/assets/images/RESET_PASS_MAIL.png)

## Technologies used

**Server:** Node, Express, JWT, Nodemailer

**Database:**  Mongoose

