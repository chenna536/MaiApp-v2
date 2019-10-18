import express from 'express';
import { createTransport } from 'nodemailer';

const app = express();
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
const smtpTransport = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'vanichennakeshava999@gmail.com',
    pass: 'Chenna@536',
  },
});
/* ------------------SMTP Over-----------------------------*/

/* ------------------Routing Started ------------------------*/

app.get('/', (req, res) => {
  res.sendfile('index.html');
});

app.get('/send', (req, res) => {
  const mailOptions = {
    to: 'vanichennakeshava333@gmail.com',
    subject: 'req.query.subject',
    text: 'req.query.text',
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log(`Message sent: ${response.message}`);
      res.end('sent');
    }
  });
});

/* --------------------Routing Over----------------------------*/

app.listen(3000, () => {
  console.log('Express Started on Port 3000');
});
