const {
    parsePriceData
} = require("./fileParser");

const testData = `60 23 1422640
58 66 3653379
61 62 5045331
57 91 4405635
72 51 4213691
91 24 3215271
35 67 24844
20 59 7497435
49 1 6988943
78 39 3497680`;

test("Parses price file correctly", () => {
    const expected = [{
            x: 60,
            y: 23,
            price: 1422640
        },
        {
            x: 58,
            y: 66,
            price: 3653379
        },
        {
            x: 61,
            y: 62,
            price: 5045331
        },
        {
            x: 57,
            y: 91,
            price: 4405635
        },
        {
            x: 72,
            y: 51,
            price: 4213691
        },
        {
            x: 91,
            y: 24,
            price: 3215271
        },
        {
            x: 35,
            y: 67,
            price: 24844
        },
        {
            x: 20,
            y: 59,
            price: 7497435
        },
        {
            x: 49,
            y: 1,
            price: 6988943
        },
        {
            x: 78,
            y: 39,
            price: 3497680
        },
    ];

    expect(parsePriceData(testData)).toStrictEqual(expected);
})