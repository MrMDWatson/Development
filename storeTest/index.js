require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const dbConnect = require("./db/dbConnect");

dbConnect();



app.use(express.json());

app.use("/user", userRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on ${process.env.PORT}`);
});