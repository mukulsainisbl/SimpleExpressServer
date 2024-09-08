const express = require("express");
const fs = require("fs");
const userRoute = express.Router();
const crypto = require("crypto");

userRoute.get("/", (req, res) => {
  res.send("Welcome to the Express.js Server");
});

userRoute.get("/about", (req, res) => {
  res.send("This is a simple web server buit using Express.js");
});

userRoute.get("/contact", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ Message: "Internal server Error" });
    } else {
      res.send(JSON.parse(data));
    }
  });
});

userRoute.get("/random", (req, res) => {
  const randomNumber = crypto.randomInt(1, 101);
  res.send(randomNumber.toString());
});

userRoute.use((req, res) => {
  res.status(404).send("404 not found");
});

module.exports = { userRoute };
