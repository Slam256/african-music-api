const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const { getSong } = require("./src/get-song");

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Port id running on ${PORT} go and catch it`);
});
let db;
let songsCollection;
const dbConnectionStr = process.env.DB_STRING;
const dbName = "african-music";

MongoClient.connect(dbConnectionStr, {
  useUnifiedTopology: true,
// eslint-disable-next-line consistent-return
}, (err, client) => {
  if (err) {
    return (err);
  }
  // eslint-disable-next-line no-console
  console.log("Saddle up Database is connected");
  db = client.db(dbName);
  songsCollection = db.collection("songs");
});

app.get("/api/:name", (req, res) => {
  const response = getSong(req);
  res.json(response);
});

app.get("/api/", (req, res) => {
  // res.statusCode= 404
  res.json("Sorry enter an artist name or song");
});

app.get("/", (req, res) => {
  songsCollection.find().toArray()
    .then((results) => {
      res.render("index.ejs", { songs: results });
    })
    .catch((error) => (error));
});

app.post("/songs", (req, res) => {
  songsCollection.insertOne({
    title: req.body.title,
    genre: req.body.genre,
    name: req.body.name,
    country: req.body.country,
    link: req.body.link,
    likes: 0,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => (error));
});

app.put("/addOneHeart", (req, res) => {
  songsCollection.updateOne({
    title: req.body.titleS,
  }, {
    $inc: {
      hearts: 1,
    },
  }, {
    sort: { _id: -1 },
    upsert: false,
  })
    .then(() => {
      res.json("Heart Added");
    })
    .catch((error) => (error));
});
