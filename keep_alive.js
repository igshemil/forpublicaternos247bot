const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot awake!');
});

module.exports = function keep_alive() {
  app.listen(3000, () => console.log('Server is running on port 3000'));
};