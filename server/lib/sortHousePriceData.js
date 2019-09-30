const sortHousePriceData = ([...priceData]) => {
    priceData.sort((a, b) => a.price - b.price);
    return priceData;
};



module.exports = sortHousePriceData;