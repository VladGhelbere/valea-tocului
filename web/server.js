const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Starting the server');

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.json());

// TODO add api route to get the products from db

async function sendMail(mailOptions){
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });
    
  return transporter.sendMail(mailOptions)
}

app.post('/api/submitOrder', async (req, res) => {
  // TODO add verify the given data
  const orderData = req.body

  const custOptions = {
    from: process.env.GMAIL_EMAIL,
    to: orderData.email,
    subject: 'Valea Tocului - Am primit comanda ta',
    text: `Dragă ${orderData.name} ! \nMulțumim pentru comandă ! \nVeți fi contactat(ă) in curând pentru confirmare ! \nComanda: ${orderData.order}`
  };

  const selfOptions = {
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: 'Valea Tocului - Comandă nouă',
    text: `Aveți o comandă nouă:\n Nume: ${orderData.name} \n Email: ${orderData.email} \n Telefon: ${orderData.phone} \n Adresă: ${orderData.address} \n Comandă: ${orderData.order}`
  };

  console.log(custOptions,  selfOptions);
  
  try {
    await sendMail(custOptions);
    await sendMail(selfOptions);
  } catch (error) {
    res.send({ 'status': 'error' });
    return
  }
  
  // add to db
  // if there's an error send back status error 
  // res.send({ 'status': 'error', 'msg': '' });

  res.send({ 'status': 'successfull' });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));