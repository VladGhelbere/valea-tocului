const express = require('express');
const path = require('path');
const app = express();

console.log('Starting the server');

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.json());

// TODO add api route to get the products from db

app.post('/api/submitOrder', (req, res) => {
  // TODO add verify the given data
  // send the emails
  // add to db
  // if there's an error send back status error 
  // res.send({ 'status': 'error', 'msg': '' });
  /*
    {
      name: 'hardcodedName',
      email: 'hardcodedEmail',
      phone: '076882542',
      address: 'asdasdsa',
      order: '1 vin'
    } 
  */
  console.log(req.body);
  res.send({ 'status': 'successfull' });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));