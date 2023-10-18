const express = require("express");
const { engine } = require("express-handlebars");
const handlebarsHelpers = require("handlebars-helpers");
const pastaData = require("./public/data/pasta.json");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
handlebarsHelpers({ handlebars: app.engine.handlebars });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    pastaData: pastaData,
  });
});

console.table(pastaData);
console.log(pastaData["spaghetti"]);

app.get("/pasta/:id", (req, res) => {
  const { id } = req.params;
  const pasta = pastaData[id];

  if (pasta) {
    res.render("pasta", {
      pastaData: pasta,
    });
  } else {
    res.status(404).render("404");
  }
});

app.get("*", (req, res) => {
  res.status(404).render("404");
});

const port = 8080 || env.port;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
