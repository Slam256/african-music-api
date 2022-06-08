const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const { getSong } = require("./src/get-song");

app.use(cors());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Port id running on ${PORT} go and catch it`);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/api/:name", (req, res) => {
  const response = getSong(req);
  res.json(response);
});

app.get("/api/", (req, res) => {
  // res.statusCode= 404
  res.json("Sorry enter an artist name or song");
});
