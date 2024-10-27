const express = require("express");

const fs = require("fs");
const path = require("path");

const app = express();

app.listen(4001, () => {
  console.log(imagePath);
});

const imagePath = path.join(__dirname,);

