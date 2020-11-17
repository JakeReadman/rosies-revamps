const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

// app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
