const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//

app.get("/", (req, res) => {
  let name = req.query.name || "World";
  res.send(`Hello ${name}!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
