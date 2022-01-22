const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Get the Static Files from React JS (Client Code)
app.use(express.static(path.join(__dirname, 'reactjs/build')));

// Sample MessageService Get API 
// We can implement any POST/GET API 
app.get('/messageservice', (req, res) => {
  res.json("Message from Node JS API:"+new Date());
});

// All the other API requests will be forwarded to React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/reactjs/build/index.html'));
});

console.log('MesageSerivce Running on ' + port);
app.listen(port, () => console.log('server is running on port: ' + port));