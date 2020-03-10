import express from "express";
const app = express();
import { mongooseConnect } from "./util/db";
import routes from "./routes";
import passportSetup from "./services/passport-setup";
//setup view engine

app.set("view engine", "ejs");

//create home route
app.use(routes);

//mongodb connection
mongooseConnect();
app.listen(3009, () => {
  console.log("app listening on port 3009");
});
