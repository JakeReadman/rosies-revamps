const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('/public/home');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});