"use strict";
const fs = require("fs");

const loadPriceFile = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf8", (err, data) => {
            if (err) reject(err);

            resolve(data);
        });
    });
};

const parsePriceData = (content) =>
    content.length > 0 && content.split(/\n/).map(priceLineToObject);

const priceLineToObject = line => {
    if (line.length === 0) return;
    let [x, y, price] = line.split(" ");
    return {
        x: parseInt(x),
        y: parseInt(y),
        price: parseInt(price)
    };
};

module.exports = {
    loadPriceFile,
    parsePriceData
};