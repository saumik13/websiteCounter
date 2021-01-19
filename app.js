const express = require("express");
const app = express();
app.use("/public",express.static("public"));

app.use(express.static("js"));

app.get("/", function (req,res) {

    res.sendFile(__dirname +"/public/index.html");

    });




app.listen(process.env.PORT);