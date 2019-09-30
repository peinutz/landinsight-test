const {
    loadPriceFile,
    parsePriceData
} = require("../lib/fileParser");
const sortHousePriceData = require("../lib/sortHousePriceData");
const {
    calculatePercentile
} = require("../lib/calculatePercentile");

const priceServiceFactory = (dependencies) => async (filePath) => {
    const {
        loadPriceFile,
        parsePriceData,
        sortHousePriceData,
        calculatePercentile
    } = dependencies;

    try {
        const file = await loadPriceFile(filePath);
        const parsedFile = parsePriceData(file);
        const housePricesWithPercentile = calculatePercentile(sortHousePriceData, parsedFile);
        return housePricesWithPercentile;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const housePriceService = priceServiceFactory({
    loadPriceFile,
    parsePriceData,
    sortHousePriceData,
    calculatePercentile
});

module.exports = {
    priceServiceFactory,
    housePriceService
}