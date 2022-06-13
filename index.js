
// pakket binnenhalen
const express = require("express");

// applicatie instantieren (constructor)
const app = express();

// endpoint
app.get("/", function(req, res) {
    res.send("Hello, World!");

});

app.listen(1001);


console.log("Hello world:");