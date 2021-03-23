const express = require('express');
// const fs = require("fs");
let app = express();
// let path = require("path");

let countiesList = {
    "Bomi": "Tubmanburg",
    "Bong": "Gbarnga",
    "Gbarpolu": "Borpolu",
    "Grand Bass": "Buchanan",
    "Grand CapeMount": "Robertsport",
    "Grand Gedeh": "Zwedru",
    "Grand Kru": "Barclayville",
    "Lofa": "Voinjama",
    "Margibi": "Kakata",
    "MaryLand": "Happer",
    "Montserrado": "Bensonville",
    "Nimba": "Sanniquellie",
    "River Cess": "Cesstos City",
    "River Gee": "Fish Town",
    "Sinoe": "Greenville"


}

console.log(countiesList);

app.get("/", (req, res) => {
    res.send("Counties And Capitals In liberia");
});


app.get("/counties", (req, res) => {
    res.send(countiesList);
});

app.get("/counties/capital/:Capital", (req, res) => {
    let capital = req.params.Capital;
    res.send(`Capital: ${countiesList[capital]}`);
    // console.log(countiesList[capital])
});

app.get("/create/county/:county-:capital", (req, res) =>{
    let county = req.params;
    res.send(JSON.stringify(county));
    let createNewCounty = JSON.parse(counties)
    // console.log(createNewCounty);
    
})

app.post("/create/county", (req, res) =>{
    let NewCountyCreated = req.body;
    // console.log("NewCountyCreated", NewCountyCreated);
})

app.listen(3900, () => console.log("Listening at port 3900"));