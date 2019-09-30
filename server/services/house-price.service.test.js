const {
    housePriceService
} = require("./house-price.service");

const loadedTestData = `1 1 1
2 2 2
3 3 3
4 4 4
5 5 5
6 6 6
7 7 7
8 8 8
9 9 9
10 10 10`;

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