const express =require('express');
const bodyParser =require("body-parser")

const app =express();

const scoreRoutes =require("./routes/score");

app.use(bodyParser.json())

app.use("/score",scoreRoutes);

module.exports = app;