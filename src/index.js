const app = require('express')();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Server is up and running for class demo');
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
