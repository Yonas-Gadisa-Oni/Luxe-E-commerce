import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Req recived");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the user acc");
});

app.post("/user", (req, res) => {
  res.send("What you what to change in the user acc")
});

app.listen(3000);