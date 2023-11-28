require('dotenv').config()
const app = require('express')();
const PORT = process.env.PORT || 8080;
const env = process.env.NODE_ENV;

app.get('/', (req, res) => {
  res.send(`Kingsley Server is up and this is class demo in ${env}`);
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
