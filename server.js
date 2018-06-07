const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.json({
	message: "Hello, iOS!"
  });
});
 
app.post('/hello/:name', function (req, res) {
  res.json({
    you: 'Hello, there!',
    me: `Hi, ${req.params.name}`
  });
});
 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});