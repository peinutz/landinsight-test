const express = require("express");
const bodyParser = require("body-parser");
const {
    housePriceService
} = require("./services/house-price.service");

const app = express();

const FILE_PATH = "./sold-price-data.txt";

//middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get("/hello/", async (req, res, next) => {
    try {
        const housePrices = await housePriceService(FILE_PATH);
        res.status(200).json(housePrices);
    } catch (err) {
        next(err);
    }

});

module.exports = app;