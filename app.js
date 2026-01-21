// basic hello world express server
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello World! This is a basic Express server running on my own server.",
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
