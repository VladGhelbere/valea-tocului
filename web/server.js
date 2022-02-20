require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
const { Pool, Client } = require("pg");
const validator = require("email-validator");
console.log('Starting the server');

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.json());

const credentials = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
};

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

async function orderRegister(orderData) {
  const pool = new Pool(credentials);
  const result = await pool.query(`INSERT INTO vt.orders (full_name, email, phone, order_content) VALUES ('${orderData.name}', '${orderData.email}', '${orderData.phone}', '${orderData.order}')`);
  await pool.end();

  return result;
}

async function getProducts() {
  const pool = new Pool(credentials);
  const products = await pool.query(`SELECT idx, p_name, description, price, image FROM vt.products`);
  await pool.end();

  return products.rows;
}

function getCustOptions(orderData){
  return {
    from: process.env.GMAIL_EMAIL,
    to: orderData.email,
    subject: 'Valea Tocului - Am primit comanda ta',
    text: `Dragă ${orderData.name} ! \nMulțumim pentru comandă ! \nVeți fi contactat(ă) in curând pentru confirmare ! \nComanda: ${orderData.order}`
  };
}

function getSelfOptions(orderData){
  return {
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: 'Valea Tocului - Comandă nouă',
    text: `Aveți o comandă nouă:\n Nume: ${orderData.name} \n Email: ${orderData.email} \n Telefon: ${orderData.phone} \n Adresă: ${orderData.address} \n Comandă: ${orderData.order}`
  };
}

app.post('/api/submitOrder', async (req, res) => {
  const orderData = req.body
  if (!validator.validate(orderData.email)){
    res.send({ 'status': 'error' , 'msg': 'Adresa de email este invalidă' });
    return
  }

  const custOptions = getCustOptions(orderData)
  const selfOptions = getSelfOptions(orderData)

  try {
    await sendMail(custOptions);
    await sendMail(selfOptions);
  } catch (error) {
    console.log(error)
    res.send({ 'status': 'error' , 'msg': 'Ceva nu a funcționat !\nTe rugăm, plasează comanda pe Instagram.' });
    return
  }

  try {
    await orderRegister(orderData);
  } catch (error) {
    console.log(error)
    res.send({ 'status': 'error' , 'msg': 'Comanda a fost plasată, însă nu am putut să o înregistrăm.' });
    return
  }

  res.send({ 'status': 'successful' });
});

app.get('/products', async (req, res) => {
  const products = await getProducts()
  res.send(products);
});

app.get('/cdn/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', req.originalUrl.split("/cdn/")[1]));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));