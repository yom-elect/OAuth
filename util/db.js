import mongoose from "mongoose";
import config from "../config/config";

const mongooseConnect = () => {
  mongoose
    .connect(config.mongoURI, { useNewUrlParser: true })
    .then(result => {
      console.log("connected");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.mongooseConnect = mongooseConnect;
