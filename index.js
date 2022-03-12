const express = require("express");
const app = express();
const port = 3000;

// route
app.get("/", (req, res) => {
  a = 1
  b = 2
  c = a + b
	res.send("Hello World!");
});

// 127.0.0.1 - localhost
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// run file
// > node index.js
