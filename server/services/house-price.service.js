const {
    loadPriceFile,
    parsePriceData
} = require("../lib/fileParser");
const sortHousePriceData = require("../lib/sortHousePriceData");
const {
    getMapWithPercentiles
} = require("../lib/getMapWithPercentiles");

const priceServiceFactory = (dependencies) => async (filePath) => {
    const {
        loadPriceFile,
        parsePriceData,
        sortHousePriceData,
        getMapWithPercentiles
    } = dependencies;

    try {
        const file = await loadPriceFile(filePath);
        const parsedFile = parsePriceData(file);
        const housePricesWithPercentile = getMapWithPercentiles(sortHousePriceData, parsedFile);
        return housePricesWithPercentile;
    } catch (err) {
        throw new Error(err);
    }
}

const housePriceService = priceServiceFactory({
    loadPriceFile,
    parsePriceData,
    sortHousePriceData,
    getMapWithPercentiles
});

module.exports = {
    priceServiceFactory,
    housePriceService
}