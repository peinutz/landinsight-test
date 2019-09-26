const sortHousePriceData = require("./sortHousePriceData");

const actual = [{
        x: 10,
        y: 10,
        price: 1000
    },
    {
        x: 20,
        y: 20,
        price: 2000
    },
    {
        x: 40,
        y: 40,
        price: 4000
    },
    {
        x: 30,
        y: 30,
        price: 3000
    },
    {
        x: 70,
        y: 70,
        price: 8000
    },
    {
        x: 80,
        y: 80,
        price: 8000
    },
    {
        x: 50,
        y: 50,
        price: 5000
    },
    {
        x: 60,
        y: 60,
        price: 6000
    }
];

const expected = [{
        x: 10,
        y: 10,
        price: 1000
    },
    {
        x: 20,
        y: 20,
        price: 2000
    },
    {
        x: 30,
        y: 30,
        price: 3000
    },
    {
        x: 40,
        y: 40,
        price: 4000
    },
    {
        x: 50,
        y: 50,
        price: 5000
    },
    {
        x: 60,
        y: 60,
        price: 6000
    },
    {
        x: 70,
        y: 70,
        price: 8000
    },
    {
        x: 80,
        y: 80,
        price: 8000
    }
];

test("Sorts price data correctly", () => {
    expect(sortHousePriceData(actual)).toStrictEqual(expected);
});