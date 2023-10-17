const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

const port = 8080 || env.port;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
