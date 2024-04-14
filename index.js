const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/health", (_req, res) => {
  res.send("Everything's good!");
});


const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
