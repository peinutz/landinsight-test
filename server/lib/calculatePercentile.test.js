const {
    calculatePercentile,
    percentile
} = require("./calculatePercentile");

const sortedData = [{
        x: 1,
        y: 1,
        price: 1
    },
    {
        x: 2,
        y: 2,
        price: 2
    },
    {
        x: 3,
        y: 3,
        price: 3
    },
    {
        x: 4,
        y: 4,
        price: 4
    },
    {
        x: 5,
        y: 5,
        price: 5
    },
    {
        x: 6,
        y: 6,
        price: 6
    },
    {
        x: 7,
        y: 7,
        price: 7
    },
    {
        x: 8,
        y: 8,
        price: 8
    },
    {
        x: 9,
        y: 9,
        price: 9
    },
    {
        x: 10,
        y: 10,
        price: 10
    }
];

const expected = [{
        x: 1,
        y: 1,
        price: 1,
        percentile: 10
    },
    {
        x: 2,
        y: 2,
        price: 2,
        percentile: 20
    },
    {
        x: 3,
        y: 3,
        price: 3,
        percentile: 30
    },
    {
        x: 4,
        y: 4,
        price: 4,
        percentile: 40
    },
    {
        x: 5,
        y: 5,
        price: 5,
        percentile: 50
    },
    {
        x: 6,
        y: 6,
        price: 6,
        percentile: 60
    },
    {
        x: 7,
        y: 7,
        price: 7,
        percentile: 70
    },
    {
        x: 8,
        y: 8,
        price: 8,
        percentile: 80
    },
    {
        x: 9,
        y: 9,
        price: 9,
        percentile: 90
    },
    {
        x: 10,
        y: 10,
        price: 10,
        percentile: 100
    }
];

test("Returns sorted array with correct percentiles", () => {
    const sortFunctionMock = jest.fn(array => sortedData);
    expect(calculatePercentile(sortFunctionMock, sortedData)).toStrictEqual(expected);
});

test("Calculates percentile correctly", () => {
    expect(percentile(1, 10)).toBe(10);
});