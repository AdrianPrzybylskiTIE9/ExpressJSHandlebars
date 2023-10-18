const express = require("express");
const { engine } = require("express-handlebars");
const pastaData = require("./public/data/pasta.json");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
     pastaData: pastaData 
  });
});

console.table(pastaData);
console.log(pastaData["spaghetti"]);

app.get("/pasta/:id", (req, res) => {
    const { id }  = req.params;

    res.render("pasta", { 
      pastaData: pastaData[id]
    })
})

const port = 8080 || env.port;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
