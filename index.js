const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/test', (req, res) => {
  res.send("Everything's good!");
});

app.get("/health", (_req, res) => {
  res.send("Everything's good!");
});


const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
