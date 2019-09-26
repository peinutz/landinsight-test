const {
    loadPriceFile,
    parsePriceData
} = require("../lib/fileParser");

const priceServiceFactory = (dependencies) => async (filePath) => {
    const {
        loadPriceFile,
        parsePriceData
    } = dependencies;

    try {
        let file = await loadPriceFile(filePath);
        let parsedFile = parsePriceData(file);
        return parsedFile;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }

}

const housePriceService = priceServiceFactory({
    loadPriceFile,
    parsePriceData
});

module.exports = {
    priceServiceFactory,
    housePriceService
}