const express = require("express");
const app = express();
const PORT = 3000;

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.use(express.urlencoded({ extended: true }));

app.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect("/");
});

app.listen(PORT, () => console.log("Port 3000 running"));
