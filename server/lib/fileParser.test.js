const {
    parsePriceData
} = require("./fileParser");

const testData = `10 10 1000
20 20 2000
30 30 3000
40 40 4000
50 50 5000
60 60 6000
70 70 7000
80 80 8000
90 90 9000
99 99 10000`;

test("Parses price file correctly", () => {
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
            price: 7000
        },
        {
            x: 80,
            y: 80,
            price: 8000
        },
        {
            x: 90,
            y: 90,
            price: 9000
        },
        {
            x: 99,
            y: 99,
            price: 10000
        },
    ];

    expect(parsePriceData(testData)).toStrictEqual(expected);
})