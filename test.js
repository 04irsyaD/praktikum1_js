const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/binary-to-decimal", (req, res) => {
  const binary = req.body.binary;
  let decimal = parseInt(binary, 2);
  let response = {
    binary: binary,
    decimal: decimal,
  };
  res.json(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
