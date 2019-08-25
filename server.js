const https = require('https');
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const PORT = 8080;

app.set('x-powered-by', false);
// app.use(express.static(__dirname + '/build'));


const options = {
  key: fs.readFileSync(path.join(__dirname, '/ssl/pay/2_pay.yingxitech.com.key')),
  cert: fs.readFileSync(path.join(__dirname, '/ssl/pay/1_pay.yingxitech.com_bundle.crt'))
};

app.post('/alipay/callback', (req, res) => {
  res.send('<h1>Callback</h1>');
});

app.get('/', (req, res) => {
  res.send('hello, I\'m Pay');
})

const server = https.createServer(options, app);





server.listen(PORT, (e) => {
  console.log(e || `Server is running on port ${PORT}.`);
});