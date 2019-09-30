const percentile = (position, numberOfElements) => (position / numberOfElements) * 100;

const calculatePercentile = (sortFunction, priceData) => {
    return sortFunction(priceData).map((curr, index, array) => {
        return {
            ...curr,
            percentile: percentile(index + 1, array.length)
        }
    })
}

module.exports = {
    calculatePercentile,
    percentile
};