const express = require("express");
const app = express();
const routes = require("./routes");
//setup view engine

app.set("view engine", "ejs");

//create home route
app.use(routes);

app.listen(3009, () => {
  console.log("app listening on port 3009");
});
