const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Jenkins');
});

app.listen(port, () => {
  console.log(`Aplikacioni po punon në portin ${port}`);
}); 