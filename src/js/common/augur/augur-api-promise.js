/**
 * Author: priecint
 *
 * This serves as wrapper around Augur API to return promises
 */
define((require) => {
    "use strict";

    // this doesn't return module, but it creates global
    require("/dist/augur/augur.js");

    var pass = function (o) { return o; };

    window.stub = {
        getClosingPrices: function (parameters) {
            return (cb || pass)([
              {
                "year": 2015,
                "day": 8,
                "month": 5,
                "closingPrice": 73.0,
                "volume": 2
              },
              {
                "year": 2015,
                "day": 9,
                "month": 5,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 5,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 5,
                "closingPrice": 73.0,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 12,
                "month": 5,
                "closingPrice": 70.6,
                "volume": 2
              },
              {
                "year": 2015,
                "day": 13,
                "month": 5,
                "closingPrice": 71.0,
                "volume": 2
              },
              {
                "year": 2015,
                "day": 14,
                "month": 5,
                "closingPrice": 71.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 15,
                "month": 5,
                "closingPrice": 71.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 16,
                "month": 5,
                "closingPrice": 71.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 17,
                "month": 5,
                "closingPrice": 70.80000000000001,
                "volume": 2
              },
              {
                "year": 2015,
                "day": 18,
                "month": 5,
                "closingPrice": 70.5,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 19,
                "month": 5,
                "closingPrice": 70.5,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 20,
                "month": 5,
                "closingPrice": 72.50000000000001,
                "volume": 4
              },
              {
                "year": 2015,
                "day": 21,
                "month": 5,
                "closingPrice": 72.50000000000001,
                "volume": 3
              },
              {
                "year": 2015,
                "day": 22,
                "month": 5,
                "closingPrice": 72.50000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 23,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 24,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 25,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 26,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 27,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 28,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 29,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 30,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 31,
                "month": 5,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 1,
                "month": 6,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 2,
                "month": 6,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 3,
                "month": 6,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 4,
                "month": 6,
                "closingPrice": 74.9,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 5,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 12
              },
              {
                "year": 2015,
                "day": 6,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 7,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 8,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 9,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 12,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 13,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 14,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 15,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 16,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 17,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 18,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 19,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 20,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 21,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 22,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 23,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 24,
                "month": 6,
                "closingPrice": 77.5,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 25,
                "month": 6,
                "closingPrice": 73.39999999999999,
                "volume": 3
              },
              {
                "year": 2015,
                "day": 26,
                "month": 6,
                "closingPrice": 73.0,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 27,
                "month": 6,
                "closingPrice": 73.0,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 28,
                "month": 6,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 29,
                "month": 6,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 30,
                "month": 6,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 1,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 2,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 3,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 4,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 5,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 6,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 7,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 8,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 9,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 12,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 13,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 14,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 15,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 16,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 17,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 18,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 19,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 20,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 21,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 22,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 23,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 24,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 25,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 26,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 27,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 28,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 29,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 30,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 31,
                "month": 7,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 1,
                "month": 8,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 2,
                "month": 8,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 3,
                "month": 8,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 4,
                "month": 8,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 5,
                "month": 8,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 6,
                "month": 8,
                "closingPrice": 73.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 7,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 8,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 9,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 12,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 13,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 14,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 15,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 16,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 17,
                "month": 8,
                "closingPrice": 74.2,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 18,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 2
              },
              {
                "year": 2015,
                "day": 19,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 20,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 21,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 22,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 23,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 24,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 25,
                "month": 8,
                "closingPrice": 72.7,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 26,
                "month": 8,
                "closingPrice": 72.0,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 27,
                "month": 8,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 28,
                "month": 8,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 29,
                "month": 8,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 30,
                "month": 8,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 31,
                "month": 8,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 1,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 2,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 3,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 4,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 5,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 6,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 7,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 8,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 9,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 12,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 13,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 14,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 15,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 16,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 17,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 18,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 19,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 20,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 21,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 22,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 23,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 24,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 25,
                "month": 9,
                "closingPrice": 72.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 26,
                "month": 9,
                "closingPrice": 70.30000000000001,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 27,
                "month": 9,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 28,
                "month": 9,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 29,
                "month": 9,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 30,
                "month": 9,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 1,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 2,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 3,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 4,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 5,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 6,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 7,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 8,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 9,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 12,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 13,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 14,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 15,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 16,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 17,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 18,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 19,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 20,
                "month": 10,
                "closingPrice": 70.30000000000001,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 21,
                "month": 10,
                "closingPrice": 72.50000000000001,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 22,
                "month": 10,
                "closingPrice": 74.4,
                "volume": 13
              },
              {
                "year": 2015,
                "day": 23,
                "month": 10,
                "closingPrice": 74.4,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 24,
                "month": 10,
                "closingPrice": 74.4,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 25,
                "month": 10,
                "closingPrice": 74.4,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 26,
                "month": 10,
                "closingPrice": 74.4,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 27,
                "month": 10,
                "closingPrice": 74.3,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 28,
                "month": 10,
                "closingPrice": 74.3,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 29,
                "month": 10,
                "closingPrice": 74.3,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 30,
                "month": 10,
                "closingPrice": 74.3,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 31,
                "month": 10,
                "closingPrice": 74.3,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 1,
                "month": 11,
                "closingPrice": 74.3,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 2,
                "month": 11,
                "closingPrice": 74.3,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 3,
                "month": 11,
                "closingPrice": 74.3,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 4,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 13
              },
              {
                "year": 2015,
                "day": 5,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 6,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 7,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 8,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 9,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 12,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 13,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 14,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 15,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 16,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 17,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 1
              },
              {
                "year": 2015,
                "day": 18,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 19,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 20,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 21,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 22,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 23,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 24,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 25,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 26,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 27,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 28,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 29,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 30,
                "month": 11,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 1,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 2,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 3,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 4,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 5,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 6,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 7,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 8,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 9,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 10,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 11,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 12,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              },
              {
                "year": 2015,
                "day": 13,
                "month": 12,
                "closingPrice": 75.0,
                "volume": 0
              }
            ]);
        },
        getMostActive: function (parameters, cb) {
            return (cb || pass)({
              "nodeId": "MOST_ACTIVE",
              "nodeType": "MOST_ACTIVE",
              "name": "Most Active",
              "childNodes": [
                {
                  "nodeId": "CONTRACT-0x5e4cdec99fdb09d798b10f01a4db8dd96185dc21a12f498d967c1db4316bccde",
                  "nodeType": "CONTRACT",
                  "name": "tf1w2tm1butyb9",
                  "childNodes": null,
                  "id": "-0x5e4cdec99fdb09d798b10f01a4db8dd96185dc21a12f498d967c1db4316bccde",
                  "eventName": "tf1w2tm1butyb9",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225225.2,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x6f0b08f4770d3ed6518afb64378361830888381569d112eeb8f9d8cb85138260",
                  "nodeType": "CONTRACT",
                  "name": "xkhy4lrhi1kyb9",
                  "childNodes": null,
                  "id": "-0x6f0b08f4770d3ed6518afb64378361830888381569d112eeb8f9d8cb85138260",
                  "eventName": "xkhy4lrhi1kyb9",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225205.55,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x8c01e6c7e04758ec9212cd99cf7ed260583ba68bc8fa8f9f325986850f21638e",
                  "nodeType": "CONTRACT",
                  "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "childNodes": null,
                  "id": "-0x8c01e6c7e04758ec9212cd99cf7ed260583ba68bc8fa8f9f325986850f21638e",
                  "eventName": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 3.16761e-15,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 3.16761e-15,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225185.91,
                  "bestBidPrice": 3.16761e-15,
                  "bestAskPrice": 3.16761e-15,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x2cd8bc893a43a9a8104ad007f6c17f650d0b37dfe142edc9618cf0eaab4058f0",
                  "nodeType": "CONTRACT",
                  "name": "Will it rain in New York City on November 12, 2016?",
                  "childNodes": null,
                  "id": "-0x2cd8bc893a43a9a8104ad007f6c17f650d0b37dfe142edc9618cf0eaab4058f0",
                  "eventName": "Will it rain in New York City on November 12, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5440334641703168,
                  "lastTradePriceFormatted": "0.54",
                  "lastTradeCostPerShare": 0.5440334641703168,
                  "lastTradeCostPerShareFormatted": "0.54 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225095.36,
                  "bestBidPrice": 0.5440334641703168,
                  "bestAskPrice": 0.5440334641703168,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xe35b02a2590bcbb8d7bdcb110d25155ea51ef7c91e7750e597150595ca2af4e3",
                  "nodeType": "CONTRACT",
                  "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "childNodes": null,
                  "id": "-0xe35b02a2590bcbb8d7bdcb110d25155ea51ef7c91e7750e597150595ca2af4e3",
                  "eventName": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225069.88,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xc90b312034a3ea5a64b32e2768488666992b52c961eaba6de11de388c0ed92",
                  "nodeType": "CONTRACT",
                  "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2016?",
                  "childNodes": null,
                  "id": "-0xc90b312034a3ea5a64b32e2768488666992b52c961eaba6de11de388c0ed92",
                  "eventName": "Will the Sun turn into a red giant and engulf the Earth by the end of 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5471839144112761,
                  "lastTradePriceFormatted": "0.55",
                  "lastTradeCostPerShare": 0.5471839144112761,
                  "lastTradeCostPerShareFormatted": "0.55 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225050.24,
                  "bestBidPrice": 0.5471839144112761,
                  "bestAskPrice": 0.5471839144112761,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xd5f5831fa7edf9e16048657e7c4ab71c6ce6e7c4dda31649d4805df7dfd09a55",
                  "nodeType": "CONTRACT",
                  "name": "What will the high temperature (in degrees Fahrenheit) be in San Francisco, California, on July 1, 2016?",
                  "childNodes": null,
                  "id": "-0xd5f5831fa7edf9e16048657e7c4ab71c6ce6e7c4dda31649d4805df7dfd09a55",
                  "eventName": "What will the high temperature (in degrees Fahrenheit) be in San Francisco, California, on July 1, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 1.1581823057744989,
                  "lastTradePriceFormatted": "1.16",
                  "lastTradeCostPerShare": 1.1581823057744989,
                  "lastTradeCostPerShareFormatted": "1.16 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225026.7,
                  "bestBidPrice": 1.1581823057744989,
                  "bestAskPrice": 1.1581823057744989,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x1522a508fb9946e751629459345a2c38b8060b6c0d4414639f8326b769931411",
                  "nodeType": "CONTRACT",
                  "name": "Which city will have the highest median single-family home price for September 2016: London, New York, Los Angeles, San Francisco, Tokyo, Palo Alto, Hong Kong, Paris, or other?",
                  "childNodes": null,
                  "id": "-0x1522a508fb9946e751629459345a2c38b8060b6c0d4414639f8326b769931411",
                  "eventName": "Which city will have the highest median single-family home price for September 2016: London, New York, Los Angeles, San Francisco, Tokyo, Palo Alto, Hong Kong, Paris, or other?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.1301327143705307,
                  "lastTradePriceFormatted": "0.13",
                  "lastTradeCostPerShare": 0.1301327143705307,
                  "lastTradeCostPerShareFormatted": "0.13 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 225019.12,
                  "bestBidPrice": 0.1301327143705307,
                  "bestAskPrice": 0.1301327143705307,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xc2894be84686a616e2b4b99299d02952ed3d9d4a36b4f20a2e7173bdd287dbfb",
                  "nodeType": "CONTRACT",
                  "name": "Which political party's candidate will win the 2016 U.S. Presidential Election: Democratic, Republican, Libertarian, or other?",
                  "childNodes": null,
                  "id": "-0xc2894be84686a616e2b4b99299d02952ed3d9d4a36b4f20a2e7173bdd287dbfb",
                  "eventName": "Which political party's candidate will win the 2016 U.S. Presidential Election: Democratic, Republican, Libertarian, or other?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.27167436559734975,
                  "lastTradePriceFormatted": "0.27",
                  "lastTradeCostPerShare": 0.27167436559734975,
                  "lastTradeCostPerShareFormatted": "0.27 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 224782.29,
                  "bestBidPrice": 0.27167436559734975,
                  "bestAskPrice": 0.27167436559734975,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xe4fc39ba23631024d5c66bbb2f13d9c275095574d6a1cc00f6e2433646ba4783",
                  "nodeType": "CONTRACT",
                  "name": "Who will win the 2016 U.S. Presidential Election: Hillary Clinton, Donald Trump, Bernie Sanders, or someone else?",
                  "childNodes": null,
                  "id": "-0xe4fc39ba23631024d5c66bbb2f13d9c275095574d6a1cc00f6e2433646ba4783",
                  "eventName": "Who will win the 2016 U.S. Presidential Election: Hillary Clinton, Donald Trump, Bernie Sanders, or someone else?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.27167436559734975,
                  "lastTradePriceFormatted": "0.27",
                  "lastTradeCostPerShare": 0.27167436559734975,
                  "lastTradeCostPerShareFormatted": "0.27 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 224711.9,
                  "bestBidPrice": 0.27167436559734975,
                  "bestAskPrice": 0.27167436559734975,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xe5a80252d97dec8a2f1be1195d7665c558e8d65297f55771acb2f493f8a9054d",
                  "nodeType": "CONTRACT",
                  "name": "Will Microsoft's stock price at 12:00 UTC on July 1, 2016 be Higher, Lower, or Equal to $54.13?",
                  "childNodes": null,
                  "id": "-0xe5a80252d97dec8a2f1be1195d7665c558e8d65297f55771acb2f493f8a9054d",
                  "eventName": "Will Microsoft's stock price at 12:00 UTC on July 1, 2016 be Higher, Lower, or Equal to $54.13?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.35721039342270366,
                  "lastTradePriceFormatted": "0.36",
                  "lastTradeCostPerShare": 0.35721039342270366,
                  "lastTradeCostPerShareFormatted": "0.36 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 224641.5,
                  "bestBidPrice": 0.35721039342270366,
                  "bestAskPrice": 0.35721039342270366,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x2bc06a0716a718dd323ef922a8369f20773f555384e4e3f5360ad8c8982ff0d7",
                  "nodeType": "CONTRACT",
                  "name": "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2015?",
                  "childNodes": null,
                  "id": "-0x2bc06a0716a718dd323ef922a8369f20773f555384e4e3f5360ad8c8982ff0d7",
                  "eventName": "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.3580144740482662,
                  "lastTradePriceFormatted": "0.36",
                  "lastTradeCostPerShare": 0.3580144740482662,
                  "lastTradeCostPerShareFormatted": "0.36 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 224582.89,
                  "bestBidPrice": 0.3580144740482662,
                  "bestAskPrice": 0.3580144740482662,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x72adcde7143e63a368baa643ca017ee1110060eb4247e14cacfe9a619d5777b2",
                  "nodeType": "CONTRACT",
                  "name": "8pxtj53mh7iudi",
                  "childNodes": null,
                  "id": "-0x72adcde7143e63a368baa643ca017ee1110060eb4247e14cacfe9a619d5777b2",
                  "eventName": "8pxtj53mh7iudi",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 224527.19,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x1ef169990699de78b2c19c968fce204f7b207dcb5e66be194255d0d34457c3c7",
                  "nodeType": "CONTRACT",
                  "name": "2zd2buld5wb3xr",
                  "childNodes": null,
                  "id": "-0x1ef169990699de78b2c19c968fce204f7b207dcb5e66be194255d0d34457c3c7",
                  "eventName": "2zd2buld5wb3xr",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 224507.54,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xbb3640f2a3611d73b71d38bf78462997d2cbea1fca1c438cb56b7eadfac14cd5",
                  "nodeType": "CONTRACT",
                  "name": "Will Augur suffer catastrophic failure before the end of 2016?",
                  "childNodes": null,
                  "id": "-0xbb3640f2a3611d73b71d38bf78462997d2cbea1fca1c438cb56b7eadfac14cd5",
                  "eventName": "Will Augur suffer catastrophic failure before the end of 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.373928166884393,
                  "lastTradePriceFormatted": "0.37",
                  "lastTradeCostPerShare": 0.373928166884393,
                  "lastTradeCostPerShareFormatted": "0.37 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 224487.9,
                  "bestBidPrice": 0.373928166884393,
                  "bestAskPrice": 0.373928166884393,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT0xb9ebdd25f3d5f5d38f97b3988dcfd51e80e3da5665717e33185c69cc1027477",
                  "nodeType": "CONTRACT",
                  "name": "What will the high temperature (in degrees Fahrenheit) be in San Francisco, California, on July 1, 2016?",
                  "childNodes": null,
                  "id": "0xb9ebdd25f3d5f5d38f97b3988dcfd51e80e3da5665717e33185c69cc1027477",
                  "eventName": "What will the high temperature (in degrees Fahrenheit) be in San Francisco, California, on July 1, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 7.071633846385883,
                  "lastTradePriceFormatted": "7.07",
                  "lastTradeCostPerShare": 7.071633846385883,
                  "lastTradeCostPerShareFormatted": "7.07 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 215078.34,
                  "bestBidPrice": 7.071633846385883,
                  "bestAskPrice": 7.071633846385883,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x6b3f13828936d10035ea30510546eaa9314609ac1417053c2406362c290b5173",
                  "nodeType": "CONTRACT",
                  "name": "Which city will have the highest median single-family home price for September 2016: London, New York, Los Angeles, San Francisco, Tokyo, Palo Alto, Hong Kong, Paris, or other?",
                  "childNodes": null,
                  "id": "-0x6b3f13828936d10035ea30510546eaa9314609ac1417053c2406362c290b5173",
                  "eventName": "Which city will have the highest median single-family home price for September 2016: London, New York, Los Angeles, San Francisco, Tokyo, Palo Alto, Hong Kong, Paris, or other?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.28486475796090466,
                  "lastTradePriceFormatted": "0.28",
                  "lastTradeCostPerShare": 0.28486475796090466,
                  "lastTradeCostPerShareFormatted": "0.28 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 215077.03,
                  "bestBidPrice": 0.28486475796090466,
                  "bestAskPrice": 0.28486475796090466,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xfbb9a5eae61e06cd0e3f1141914415bc3260f5c2e1f40d506fad156ac0bcaa6",
                  "nodeType": "CONTRACT",
                  "name": "Which political party's candidate will win the 2016 U.S. Presidential Election: Democratic, Republican, Libertarian, or other?",
                  "childNodes": null,
                  "id": "-0xfbb9a5eae61e06cd0e3f1141914415bc3260f5c2e1f40d506fad156ac0bcaa6",
                  "eventName": "Which political party's candidate will win the 2016 U.S. Presidential Election: Democratic, Republican, Libertarian, or other?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.36101996157706706,
                  "lastTradePriceFormatted": "0.36",
                  "lastTradeCostPerShare": 0.36101996157706706,
                  "lastTradeCostPerShareFormatted": "0.36 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214850.93,
                  "bestBidPrice": 0.36101996157706706,
                  "bestAskPrice": 0.36101996157706706,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xd55a06e46c8811387fbe2c2ef0e90640d49ca9edc47432d8fa80427595f231fe",
                  "nodeType": "CONTRACT",
                  "name": "Who will win the 2016 U.S. Presidential Election: Hillary Clinton, Donald Trump, Bernie Sanders, or someone else?",
                  "childNodes": null,
                  "id": "-0xd55a06e46c8811387fbe2c2ef0e90640d49ca9edc47432d8fa80427595f231fe",
                  "eventName": "Who will win the 2016 U.S. Presidential Election: Hillary Clinton, Donald Trump, Bernie Sanders, or someone else?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.36101996157706706,
                  "lastTradePriceFormatted": "0.36",
                  "lastTradeCostPerShare": 0.36101996157706706,
                  "lastTradeCostPerShareFormatted": "0.36 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214801.5,
                  "bestBidPrice": 0.36101996157706706,
                  "bestAskPrice": 0.36101996157706706,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xba15db0ca2eff1ee7ab7ba7de6683b6436b6cfc025ddc3d037da1ad1ed574fa5",
                  "nodeType": "CONTRACT",
                  "name": "Will Microsoft's stock price at 12:00 UTC on July 1, 2016 be Higher, Lower, or Equal to $54.13?",
                  "childNodes": null,
                  "id": "-0xba15db0ca2eff1ee7ab7ba7de6683b6436b6cfc025ddc3d037da1ad1ed574fa5",
                  "eventName": "Will Microsoft's stock price at 12:00 UTC on July 1, 2016 be Higher, Lower, or Equal to $54.13?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.4226548147512654,
                  "lastTradePriceFormatted": "0.42",
                  "lastTradeCostPerShare": 0.4226548147512654,
                  "lastTradeCostPerShareFormatted": "0.42 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214752.08,
                  "bestBidPrice": 0.4226548147512654,
                  "bestAskPrice": 0.4226548147512654,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xe4c36d8a4e04796d76012ca418e770bd806ca8abdfb0760e89fceb3cc70dfc8a",
                  "nodeType": "CONTRACT",
                  "name": "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2015?",
                  "childNodes": null,
                  "id": "-0xe4c36d8a4e04796d76012ca418e770bd806ca8abdfb0760e89fceb3cc70dfc8a",
                  "eventName": "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.42283644424083167,
                  "lastTradePriceFormatted": "0.42",
                  "lastTradeCostPerShare": 0.42283644424083167,
                  "lastTradeCostPerShareFormatted": "0.42 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214717.32,
                  "bestBidPrice": 0.42283644424083167,
                  "bestAskPrice": 0.42283644424083167,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x1a3b9234c30ae153051e6348cf92a1af77c00311074e52e61a203540ae4d799a",
                  "nodeType": "CONTRACT",
                  "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "childNodes": null,
                  "id": "-0x1a3b9234c30ae153051e6348cf92a1af77c00311074e52e61a203540ae4d799a",
                  "eventName": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5471839144112761,
                  "lastTradePriceFormatted": "0.55",
                  "lastTradeCostPerShare": 0.5471839144112761,
                  "lastTradeCostPerShareFormatted": "0.55 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214684.89,
                  "bestBidPrice": 0.5471839144112761,
                  "bestAskPrice": 0.5471839144112761,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x131d09536e499e2c2c0afd72220a9c3eae6d6d1ed20248f0e15c5b4869167106",
                  "nodeType": "CONTRACT",
                  "name": "Will it rain in New York City on November 12, 2016?",
                  "childNodes": null,
                  "id": "-0x131d09536e499e2c2c0afd72220a9c3eae6d6d1ed20248f0e15c5b4869167106",
                  "eventName": "Will it rain in New York City on November 12, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.9970433087153328,
                  "lastTradePriceFormatted": "1.00",
                  "lastTradeCostPerShare": 0.9970433087153328,
                  "lastTradeCostPerShareFormatted": "1.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214661.36,
                  "bestBidPrice": 0.9970433087153328,
                  "bestAskPrice": 0.9970433087153328,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x69daf74a0f35919ad856c543e3e4b742f1870554ff607989f9cdbfb2aa064723",
                  "nodeType": "CONTRACT",
                  "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "childNodes": null,
                  "id": "-0x69daf74a0f35919ad856c543e3e4b742f1870554ff607989f9cdbfb2aa064723",
                  "eventName": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5413254957177456,
                  "lastTradePriceFormatted": "0.54",
                  "lastTradeCostPerShare": 0.5413254957177456,
                  "lastTradeCostPerShareFormatted": "0.54 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214638.77,
                  "bestBidPrice": 0.5413254957177456,
                  "bestAskPrice": 0.5413254957177456,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x3e1364205bbf59034e0177e5d06211862d6c70d670fd84388e986cc39b29e971",
                  "nodeType": "CONTRACT",
                  "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2016?",
                  "childNodes": null,
                  "id": "-0x3e1364205bbf59034e0177e5d06211862d6c70d670fd84388e986cc39b29e971",
                  "eventName": "Will the Sun turn into a red giant and engulf the Earth by the end of 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5350876278166969,
                  "lastTradePriceFormatted": "0.54",
                  "lastTradeCostPerShare": 0.5350876278166969,
                  "lastTradeCostPerShareFormatted": "0.54 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214611.34,
                  "bestBidPrice": 0.5350876278166969,
                  "bestAskPrice": 0.5350876278166969,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x1f46e984369f801065ee756c5d11d4ecbab352d14b1c53accd2b288363b4b189",
                  "nodeType": "CONTRACT",
                  "name": "Is Mike gay?",
                  "childNodes": null,
                  "id": "-0x1f46e984369f801065ee756c5d11d4ecbab352d14b1c53accd2b288363b4b189",
                  "eventName": "Is Mike gay?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5065112124597393,
                  "lastTradePriceFormatted": "0.51",
                  "lastTradeCostPerShare": 0.5065112124597393,
                  "lastTradeCostPerShareFormatted": "0.51 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 214578.08,
                  "bestBidPrice": 0.5065112124597393,
                  "bestAskPrice": 0.5065112124597393,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT0xf1d447317b95a885cc65fe3313442585f42b3a6c5b0a1ba5beab8d28fd686a8",
                  "nodeType": "CONTRACT",
                  "name": "Will the North Real Time Hub Price for electricity in ERCOT break a block price of $35 for Hours 7-22 on December 17, 2015?",
                  "childNodes": null,
                  "id": "0xf1d447317b95a885cc65fe3313442585f42b3a6c5b0a1ba5beab8d28fd686a8",
                  "eventName": "Will the North Real Time Hub Price for electricity in ERCOT break a block price of $35 for Hours 7-22 on December 17, 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.7380205487637284,
                  "lastTradePriceFormatted": "0.74",
                  "lastTradeCostPerShare": 0.7380205487637284,
                  "lastTradeCostPerShareFormatted": "0.74 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 213622.99,
                  "bestBidPrice": 0.7380205487637284,
                  "bestAskPrice": 0.7380205487637284,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xd7a91c43c720e5d15c1ccb5caa204972460c6e80a023c0e10c859d4f3e268970",
                  "nodeType": "CONTRACT",
                  "name": "Will the Houston Real Time Hub Price for electricity in ERCOT break a block price of $35 for Hours 7-22 on December 17, 2015?",
                  "childNodes": null,
                  "id": "-0xd7a91c43c720e5d15c1ccb5caa204972460c6e80a023c0e10c859d4f3e268970",
                  "eventName": "Will the Houston Real Time Hub Price for electricity in ERCOT break a block price of $35 for Hours 7-22 on December 17, 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 8.04912e-15,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 8.04912e-15,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 202363.43,
                  "bestBidPrice": 8.04912e-15,
                  "bestAskPrice": 8.04912e-15,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x21b1215edad65ea682c56cb4cf2c5d6ae4c8e767c4fb4ab5ad0116bcb3e36f6f",
                  "nodeType": "CONTRACT",
                  "name": "h8i5ouf0ztzkt9",
                  "childNodes": null,
                  "id": "-0x21b1215edad65ea682c56cb4cf2c5d6ae4c8e767c4fb4ab5ad0116bcb3e36f6f",
                  "eventName": "h8i5ouf0ztzkt9",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 200908.33,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x7c30e8e1d1b09ca9eb17af05c0ee9a6a3b76de6a8c245fec5523f4371185f144",
                  "nodeType": "CONTRACT",
                  "name": "0279j434zvkj4i",
                  "childNodes": null,
                  "id": "-0x7c30e8e1d1b09ca9eb17af05c0ee9a6a3b76de6a8c245fec5523f4371185f144",
                  "eventName": "0279j434zvkj4i",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 200888.69,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x7231f7b2050ceb1c4de99477105224127dd7aa0370668a029bb12975c8bb72eb",
                  "nodeType": "CONTRACT",
                  "name": "hjk hjk hjk hjk hkj hkjhjk",
                  "childNodes": null,
                  "id": "-0x7231f7b2050ceb1c4de99477105224127dd7aa0370668a029bb12975c8bb72eb",
                  "eventName": "hjk hjk hjk hjk hkj hkjhjk",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.0004394025480990082,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 0.0004394025480990082,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 200869.05,
                  "bestBidPrice": 0.0004394025480990082,
                  "bestAskPrice": 0.0004394025480990082,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x5932c04cfb6df8275387fc5d15a9897d61a2ef598c7e60ae45829e9e1e3409e6",
                  "nodeType": "CONTRACT",
                  "name": "Will \"Star Wars - The Force Awakens\" gross the highest domestic weekend box office in history (according to box office mojo) on its starting weekend?",
                  "childNodes": null,
                  "id": "-0x5932c04cfb6df8275387fc5d15a9897d61a2ef598c7e60ae45829e9e1e3409e6",
                  "eventName": "Will \"Star Wars - The Force Awakens\" gross the highest domestic weekend box office in history (according to box office mojo) on its starting weekend?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": -1.341462e-14,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": -1.341462e-14,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 199846.94,
                  "bestBidPrice": -1.341462e-14,
                  "bestAskPrice": -1.341462e-14,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x464d241af6bab8d826ba42e7fcd7fe3ea0b83971d1f9798054344c2b725f6f8b",
                  "nodeType": "CONTRACT",
                  "name": "Will the Alabama Crimson Tide college football team beat the Michigan State Spartans in the Cotton Bowl on December 31, 2015?",
                  "childNodes": null,
                  "id": "-0x464d241af6bab8d826ba42e7fcd7fe3ea0b83971d1f9798054344c2b725f6f8b",
                  "eventName": "Will the Alabama Crimson Tide college football team beat the Michigan State Spartans in the Cotton Bowl on December 31, 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.8463496288113034,
                  "lastTradePriceFormatted": "0.85",
                  "lastTradeCostPerShare": 0.8463496288113034,
                  "lastTradeCostPerShareFormatted": "0.85 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 189117.94,
                  "bestBidPrice": 0.8463496288113034,
                  "bestAskPrice": 0.8463496288113034,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xb529e1791f8dd2c8d15eed1f4b35c94bad7b2f32ae52f8abb6801d1842c427b0",
                  "nodeType": "CONTRACT",
                  "name": "EPL: Will Chelsea win the Barclays Premier League 2015/2016?",
                  "childNodes": null,
                  "id": "-0xb529e1791f8dd2c8d15eed1f4b35c94bad7b2f32ae52f8abb6801d1842c427b0",
                  "eventName": "EPL: Will Chelsea win the Barclays Premier League 2015/2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 4.570476e-14,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 4.570476e-14,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 179622.38,
                  "bestBidPrice": 4.570476e-14,
                  "bestAskPrice": 4.570476e-14,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x4d66e1897ffd27a09a8c60ff485ad3cbc0c8d339ab4471e614608bdcc8b798f",
                  "nodeType": "CONTRACT",
                  "name": "Will Russia kill Turkish troops before February 1st, 2016?",
                  "childNodes": null,
                  "id": "-0x4d66e1897ffd27a09a8c60ff485ad3cbc0c8d339ab4471e614608bdcc8b798f",
                  "eventName": "Will Russia kill Turkish troops before February 1st, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 3.2842534595e-10,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 3.2842534595e-10,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 173667.28,
                  "bestBidPrice": 3.2842534595e-10,
                  "bestAskPrice": 3.2842534595e-10,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xeed9c718906aecf1a082b7472d88994b5b78797e869fb7aee9412aa8b83e1a54",
                  "nodeType": "CONTRACT",
                  "name": "5yfmh4ab8rggb9",
                  "childNodes": null,
                  "id": "-0xeed9c718906aecf1a082b7472d88994b5b78797e869fb7aee9412aa8b83e1a54",
                  "eventName": "5yfmh4ab8rggb9",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 172511.19,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x549057123dd93ce610c30c32988495d3dd33557e6783fa1b044bfe132f567b3f",
                  "nodeType": "CONTRACT",
                  "name": "zxphpvcsl6usor",
                  "childNodes": null,
                  "id": "-0x549057123dd93ce610c30c32988495d3dd33557e6783fa1b044bfe132f567b3f",
                  "eventName": "zxphpvcsl6usor",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 172491.55,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x7ce397bc0ca391ebf1fe62c041085e65ea18de14fc79ccac12b89f5baf71944a",
                  "nodeType": "CONTRACT",
                  "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "childNodes": null,
                  "id": "-0x7ce397bc0ca391ebf1fe62c041085e65ea18de14fc79ccac12b89f5baf71944a",
                  "eventName": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 1.06252e-15,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 1.06252e-15,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 172471.9,
                  "bestBidPrice": 1.06252e-15,
                  "bestAskPrice": 1.06252e-15,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x8446e6b0808eb066d6c441845a806086791b5f1ccd6f370ec1a2b6a0d07c31e",
                  "nodeType": "CONTRACT",
                  "name": "Will it rain in New York City on November 12, 2016?",
                  "childNodes": null,
                  "id": "-0x8446e6b0808eb066d6c441845a806086791b5f1ccd6f370ec1a2b6a0d07c31e",
                  "eventName": "Will it rain in New York City on November 12, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 172369.77,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x784af2e100c2fd461fe4d29329429c18edc95e2e6db1b3eef836a90b001eebd",
                  "nodeType": "CONTRACT",
                  "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "childNodes": null,
                  "id": "-0x784af2e100c2fd461fe4d29329429c18edc95e2e6db1b3eef836a90b001eebd",
                  "eventName": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5413254957177456,
                  "lastTradePriceFormatted": "0.54",
                  "lastTradeCostPerShare": 0.5413254957177456,
                  "lastTradeCostPerShareFormatted": "0.54 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 172350.12,
                  "bestBidPrice": 0.5413254957177456,
                  "bestAskPrice": 0.5413254957177456,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x88428c41720de03fde05a2a3f762bbc20f18c47f66cde3090feff9a6ace92a9e",
                  "nodeType": "CONTRACT",
                  "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "childNodes": null,
                  "id": "-0x88428c41720de03fde05a2a3f762bbc20f18c47f66cde3090feff9a6ace92a9e",
                  "eventName": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 2.276131e-14,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 2.276131e-14,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 172322.7,
                  "bestBidPrice": 2.276131e-14,
                  "bestAskPrice": 2.276131e-14,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x97b53dae0d4473bd275105f69b677b518471575138e18313264652943ff672d6",
                  "nodeType": "CONTRACT",
                  "name": "afi937op3nmi",
                  "childNodes": null,
                  "id": "-0x97b53dae0d4473bd275105f69b677b518471575138e18313264652943ff672d6",
                  "eventName": "afi937op3nmi",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171295.27,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x74857983b781f0d2ae988c7df5b264d0122f52493871b801aa5bb4a20a5e5884",
                  "nodeType": "CONTRACT",
                  "name": "l8x86naozjjor",
                  "childNodes": null,
                  "id": "-0x74857983b781f0d2ae988c7df5b264d0122f52493871b801aa5bb4a20a5e5884",
                  "eventName": "l8x86naozjjor",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171275.62,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x6c830e4189b5e18173ad3c98b3529224998b5da32d05e7d1b2f8c5d7fe355641",
                  "nodeType": "CONTRACT",
                  "name": "h0hssd9aegsyvi",
                  "childNodes": null,
                  "id": "-0x6c830e4189b5e18173ad3c98b3529224998b5da32d05e7d1b2f8c5d7fe355641",
                  "eventName": "h0hssd9aegsyvi",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171255.98,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x5d0dc55b6e18428118dfc182fb421f36b86fb30ce6840d418a5cf3cbd1710ccb",
                  "nodeType": "CONTRACT",
                  "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "childNodes": null,
                  "id": "-0x5d0dc55b6e18428118dfc182fb421f36b86fb30ce6840d418a5cf3cbd1710ccb",
                  "eventName": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5389730750705896,
                  "lastTradePriceFormatted": "0.54",
                  "lastTradeCostPerShare": 0.5389730750705896,
                  "lastTradeCostPerShareFormatted": "0.54 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171236.34,
                  "bestBidPrice": 0.5389730750705896,
                  "bestAskPrice": 0.5389730750705896,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xe29102b4d5ca718d85a0b323d6a9ac24e68f59c99bd5990f9ea9001d519c3250",
                  "nodeType": "CONTRACT",
                  "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "childNodes": null,
                  "id": "-0xe29102b4d5ca718d85a0b323d6a9ac24e68f59c99bd5990f9ea9001d519c3250",
                  "eventName": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5320108371996579,
                  "lastTradePriceFormatted": "0.53",
                  "lastTradeCostPerShare": 0.5320108371996579,
                  "lastTradeCostPerShareFormatted": "0.53 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171206.97,
                  "bestBidPrice": 0.5320108371996579,
                  "bestAskPrice": 0.5320108371996579,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x432e8a45c7ef6501cd5f487478b277114f264879e0797cb40ca292d1b544cb40",
                  "nodeType": "CONTRACT",
                  "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "childNodes": null,
                  "id": "-0x432e8a45c7ef6501cd5f487478b277114f264879e0797cb40ca292d1b544cb40",
                  "eventName": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5508944925845605,
                  "lastTradePriceFormatted": "0.55",
                  "lastTradeCostPerShare": 0.5508944925845605,
                  "lastTradeCostPerShareFormatted": "0.55 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171169.83,
                  "bestBidPrice": 0.5508944925845605,
                  "bestAskPrice": 0.5508944925845605,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x58137ea5cb1d5f2e7d07118a339ee3bd444fa4c1e83f3e5368e3d8af4ece0f07",
                  "nodeType": "CONTRACT",
                  "name": "Will it rain in New York City on November 12, 2016?",
                  "childNodes": null,
                  "id": "-0x58137ea5cb1d5f2e7d07118a339ee3bd444fa4c1e83f3e5368e3d8af4ece0f07",
                  "eventName": "Will it rain in New York City on November 12, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5334647797912806,
                  "lastTradePriceFormatted": "0.53",
                  "lastTradeCostPerShare": 0.5334647797912806,
                  "lastTradeCostPerShareFormatted": "0.53 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171148.24,
                  "bestBidPrice": 0.5334647797912806,
                  "bestAskPrice": 0.5334647797912806,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xa460e57bff042205d5947eba0a3efe119375f910dd27c4ca4ca8ab271b79e2c6",
                  "nodeType": "CONTRACT",
                  "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "childNodes": null,
                  "id": "-0xa460e57bff042205d5947eba0a3efe119375f910dd27c4ca4ca8ab271b79e2c6",
                  "eventName": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5413254957177456,
                  "lastTradePriceFormatted": "0.54",
                  "lastTradeCostPerShare": 0.5413254957177456,
                  "lastTradeCostPerShareFormatted": "0.54 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171113.04,
                  "bestBidPrice": 0.5413254957177456,
                  "bestAskPrice": 0.5413254957177456,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x6f422242d411c18300f77e5d3f693a630773c73ba189c2bd935cbd2ceab73329",
                  "nodeType": "CONTRACT",
                  "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "childNodes": null,
                  "id": "-0x6f422242d411c18300f77e5d3f693a630773c73ba189c2bd935cbd2ceab73329",
                  "eventName": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": -1.2065e-15,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": -1.2065e-15,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 171085.62,
                  "bestBidPrice": -1.2065e-15,
                  "bestAskPrice": -1.2065e-15,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x45cccda02abe80e0d6c214dbb05d483016909f1169709346c50183074584212d",
                  "nodeType": "CONTRACT",
                  "name": "Will Santa Claus deliver presents to Syria this year?",
                  "childNodes": null,
                  "id": "-0x45cccda02abe80e0d6c214dbb05d483016909f1169709346c50183074584212d",
                  "eventName": "Will Santa Claus deliver presents to Syria this year?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5078045798122678,
                  "lastTradePriceFormatted": "0.51",
                  "lastTradeCostPerShare": 0.5078045798122678,
                  "lastTradeCostPerShareFormatted": "0.51 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 170956.24,
                  "bestBidPrice": 0.5078045798122678,
                  "bestAskPrice": 0.5078045798122678,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x5163f359270cb1a242e720b37462ea8e1e05b744897c6d99e6a560de20b9ec3e",
                  "nodeType": "CONTRACT",
                  "name": "Will the US Federal Reserve Bank raise interest rates on 16 December 2015?",
                  "childNodes": null,
                  "id": "-0x5163f359270cb1a242e720b37462ea8e1e05b744897c6d99e6a560de20b9ec3e",
                  "eventName": "Will the US Federal Reserve Bank raise interest rates on 16 December 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.0018668220837644908,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 0.0018668220837644908,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 156942.96,
                  "bestBidPrice": 0.0018668220837644908,
                  "bestAskPrice": 0.0018668220837644908,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT0xb134cb71e4c8dfb86228671e5586c758924a721fe9ddf09c1ba6d3afcafe61e",
                  "nodeType": "CONTRACT",
                  "name": "Will it rain in New York City on December 4th, 2015.",
                  "childNodes": null,
                  "id": "0xb134cb71e4c8dfb86228671e5586c758924a721fe9ddf09c1ba6d3afcafe61e",
                  "eventName": "Will it rain in New York City on December 4th, 2015.",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5065112124597393,
                  "lastTradePriceFormatted": "0.51",
                  "lastTradeCostPerShare": 0.5065112124597393,
                  "lastTradeCostPerShareFormatted": "0.51 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 154946.45,
                  "bestBidPrice": 0.5065112124597393,
                  "bestAskPrice": 0.5065112124597393,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x3349373fa86c7adf383159f761a3b359bd7bd863687b04fd8d13caf37d84ccf7",
                  "nodeType": "CONTRACT",
                  "name": "Will Hillary Clinton be elected President of the United States?",
                  "childNodes": null,
                  "id": "-0x3349373fa86c7adf383159f761a3b359bd7bd863687b04fd8d13caf37d84ccf7",
                  "eventName": "Will Hillary Clinton be elected President of the United States?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.9999998088186108,
                  "lastTradePriceFormatted": "1.00",
                  "lastTradeCostPerShare": 0.9999998088186108,
                  "lastTradeCostPerShareFormatted": "1.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 153991.36,
                  "bestBidPrice": 0.9999998088186108,
                  "bestAskPrice": 0.9999998088186108,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x9da6914055b088f0975ec3b35445fd17a73b35c18722618e7e569ede0661c544",
                  "nodeType": "CONTRACT",
                  "name": "Will Hillary Clinton win the Democratic Primary in South Carolina?",
                  "childNodes": null,
                  "id": "-0x9da6914055b088f0975ec3b35445fd17a73b35c18722618e7e569ede0661c544",
                  "eventName": "Will Hillary Clinton win the Democratic Primary in South Carolina?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5065112124597393,
                  "lastTradePriceFormatted": "0.51",
                  "lastTradeCostPerShare": 0.5065112124597393,
                  "lastTradeCostPerShareFormatted": "0.51 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 149697.94,
                  "bestBidPrice": 0.5065112124597393,
                  "bestAskPrice": 0.5065112124597393,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xbe99dc7329bd1a75c1c3244d30b5a04e0c783e72be714754d3c82a79c0d8cf47",
                  "nodeType": "CONTRACT",
                  "name": "Will Bernie Sanders win the Democratic Primary in New Hampshire?",
                  "childNodes": null,
                  "id": "-0xbe99dc7329bd1a75c1c3244d30b5a04e0c783e72be714754d3c82a79c0d8cf47",
                  "eventName": "Will Bernie Sanders win the Democratic Primary in New Hampshire?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5065112124597393,
                  "lastTradePriceFormatted": "0.51",
                  "lastTradeCostPerShare": 0.5065112124597393,
                  "lastTradeCostPerShareFormatted": "0.51 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 148742.85,
                  "bestBidPrice": 0.5065112124597393,
                  "bestAskPrice": 0.5065112124597393,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x2829788f834cba3d37bbaa3b9bf3f7aaf97dfb842e755ecfe337da0cc76aa5d",
                  "nodeType": "CONTRACT",
                  "name": "Will Hillary Clinton win the Democratic Primary in New Hampshire?",
                  "childNodes": null,
                  "id": "-0x2829788f834cba3d37bbaa3b9bf3f7aaf97dfb842e755ecfe337da0cc76aa5d",
                  "eventName": "Will Hillary Clinton win the Democratic Primary in New Hampshire?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.9999999999999917,
                  "lastTradePriceFormatted": "1.00",
                  "lastTradeCostPerShare": 0.9999999999999917,
                  "lastTradeCostPerShareFormatted": "1.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 147787.75,
                  "bestBidPrice": 0.9999999999999917,
                  "bestAskPrice": 0.9999999999999917,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xab9c68620fceac7d1e9af9dc918bc45e9aa91ffbeb873b19c045fda44a3c548c",
                  "nodeType": "CONTRACT",
                  "name": "Will the price of gold go under $1000 before Jan 1, 2016 ?",
                  "childNodes": null,
                  "id": "-0xab9c68620fceac7d1e9af9dc918bc45e9aa91ffbeb873b19c045fda44a3c548c",
                  "eventName": "Will the price of gold go under $1000 before Jan 1, 2016 ?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 3.5929828904e-10,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 3.5929828904e-10,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 143779.66,
                  "bestBidPrice": 3.5929828904e-10,
                  "bestAskPrice": 3.5929828904e-10,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xd0925b5df223a339a63f21343552e60044f9985c87d2c5e7f142a51348d00f6d",
                  "nodeType": "CONTRACT",
                  "name": "Will the S&P 500 go under 2000 points before 1 December 2015?",
                  "childNodes": null,
                  "id": "-0xd0925b5df223a339a63f21343552e60044f9985c87d2c5e7f142a51348d00f6d",
                  "eventName": "Will the S&P 500 go under 2000 points before 1 December 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 1.11283e-15,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 1.11283e-15,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 142624.56,
                  "bestBidPrice": 1.11283e-15,
                  "bestAskPrice": 1.11283e-15,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x58607418df987ca10a13ca9c9e30bc56c19761a838c1c2f6ae38490cd240d303",
                  "nodeType": "CONTRACT",
                  "name": "Will Donald Trump win the Republican primary in 2016?",
                  "childNodes": null,
                  "id": "-0x58607418df987ca10a13ca9c9e30bc56c19761a838c1c2f6ae38490cd240d303",
                  "eventName": "Will Donald Trump win the Republican primary in 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": -1.580246e-14,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": -1.580246e-14,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 119653.06,
                  "bestBidPrice": -1.580246e-14,
                  "bestAskPrice": -1.580246e-14,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xc72a108f3081a9ed130a9bfd04f1d74842e3f47a535eb4bd0d98a084c170ee6b",
                  "nodeType": "CONTRACT",
                  "name": "Will it be a white christmas in the U.K. as defined by the MET office",
                  "childNodes": null,
                  "id": "-0xc72a108f3081a9ed130a9bfd04f1d74842e3f47a535eb4bd0d98a084c170ee6b",
                  "eventName": "Will it be a white christmas in the U.K. as defined by the MET office",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 5.0071801171742e-7,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 5.0071801171742e-7,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 101836.08,
                  "bestBidPrice": 5.0071801171742e-7,
                  "bestAskPrice": 5.0071801171742e-7,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xe8805c30a1d26009cfe62bee8c37654a35513b1f4f990c7ce1db45ef02b07b9b",
                  "nodeType": "CONTRACT",
                  "name": "Will Bitcoin hit $500 by the end of 2015?",
                  "childNodes": null,
                  "id": "-0xe8805c30a1d26009cfe62bee8c37654a35513b1f4f990c7ce1db45ef02b07b9b",
                  "eventName": "Will Bitcoin hit $500 by the end of 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.9808653535962055,
                  "lastTradePriceFormatted": "0.98",
                  "lastTradeCostPerShare": 0.9808653535962055,
                  "lastTradeCostPerShareFormatted": "0.98 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 99239.57,
                  "bestBidPrice": 0.9808653535962055,
                  "bestAskPrice": 0.9808653535962055,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x799cab8507685f2a0b1ce5226456b89d51e7fcb9fa0b83f26debaafb07779ee6",
                  "nodeType": "CONTRACT",
                  "name": "yt29q426426gvi",
                  "childNodes": null,
                  "id": "-0x799cab8507685f2a0b1ce5226456b89d51e7fcb9fa0b83f26debaafb07779ee6",
                  "eventName": "yt29q426426gvi",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 22638.48,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x6efed81d9efb9092984fd0c797fc6497d3dd665b089ad76299fe30bb874aeee1",
                  "nodeType": "CONTRACT",
                  "name": "yco3a3tu7vte29",
                  "childNodes": null,
                  "id": "-0x6efed81d9efb9092984fd0c797fc6497d3dd665b089ad76299fe30bb874aeee1",
                  "eventName": "yco3a3tu7vte29",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.5553283405211205,
                  "lastTradePriceFormatted": "0.56",
                  "lastTradeCostPerShare": 0.5553283405211205,
                  "lastTradeCostPerShareFormatted": "0.56 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 22618.84,
                  "bestBidPrice": 0.5553283405211205,
                  "bestAskPrice": 0.5553283405211205,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0x428531d38a8960123e16a2810591c36d523a5269081543f7ac5914408ae63183",
                  "nodeType": "CONTRACT",
                  "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "childNodes": null,
                  "id": "-0x428531d38a8960123e16a2810591c36d523a5269081543f7ac5914408ae63183",
                  "eventName": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 0.8605492395220321,
                  "lastTradePriceFormatted": "0.86",
                  "lastTradeCostPerShare": 0.8605492395220321,
                  "lastTradeCostPerShareFormatted": "0.86 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 22599.19,
                  "bestBidPrice": 0.8605492395220321,
                  "bestAskPrice": 0.8605492395220321,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xcd220a762601e471f9efae4c911d0e7380927c571743e060843f105a4a1e96bc",
                  "nodeType": "CONTRACT",
                  "name": "Will it rain in New York City on November 12, 2016?",
                  "childNodes": null,
                  "id": "-0xcd220a762601e471f9efae4c911d0e7380927c571743e060843f105a4a1e96bc",
                  "eventName": "Will it rain in New York City on November 12, 2016?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 6.229392e-14,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 6.229392e-14,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 20338.06,
                  "bestBidPrice": 6.229392e-14,
                  "bestAskPrice": 6.229392e-14,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xae0ce90ebaefc956c35bfc6ebe87f3480326c325676abc9430cb253955bd15e7",
                  "nodeType": "CONTRACT",
                  "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "childNodes": null,
                  "id": "-0xae0ce90ebaefc956c35bfc6ebe87f3480326c325676abc9430cb253955bd15e7",
                  "eventName": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 4.8312e-15,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 4.8312e-15,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 18938.69,
                  "bestBidPrice": 4.8312e-15,
                  "bestAskPrice": 4.8312e-15,
                  "leaf": true
                },
                {
                  "nodeId": "CONTRACT-0xa6f4865420b455a7a5117c73a89a70fb22a93c5c6567377074ac2a520f6189bf",
                  "nodeType": "CONTRACT",
                  "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "childNodes": null,
                  "id": "-0xa6f4865420b455a7a5117c73a89a70fb22a93c5c6567377074ac2a520f6189bf",
                  "eventName": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                  "imagePath": null,
                  "displayOrder": 0,
                  "tickSize": 0.1,
                  "tickValue": 0.01,
                  "lastTradePrice": 4.453168979054e-8,
                  "lastTradePriceFormatted": "0.00",
                  "lastTradeCostPerShare": 4.453168979054e-8,
                  "lastTradeCostPerShareFormatted": "0.00 CASH",
                  "sessionChangePrice": 0,
                  "sessionChangePriceFormatted": "+0.0",
                  "sessionChangeCostPerShare": 0,
                  "sessionChangeCostPerShareFormatted": "0.00 CASH",
                  "totalVolume": 12405.37,
                  "bestBidPrice": 4.453168979054e-8,
                  "bestAskPrice": 4.453168979054e-8,
                  "leaf": true
                }
              ],
              "leaf": false
            });
        },
        getMarketsSummary: function (parameters, cb) {
            return (cb || pass)([
              {
                "id": "-0xa6f4865420b455a7a5117c73a89a70fb22a93c5c6567377074ac2a520f6189bf",
                "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                "lastTradePrice": 4.453168979054e-8,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 4.453168979054e-8,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0xae0ce90ebaefc956c35bfc6ebe87f3480326c325676abc9430cb253955bd15e7",
                "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                "lastTradePrice": 4.8312e-15,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 4.8312e-15,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0xcd220a762601e471f9efae4c911d0e7380927c571743e060843f105a4a1e96bc",
                "name": "Will it rain in New York City on November 12, 2016?",
                "lastTradePrice": 6.229392e-14,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 6.229392e-14,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x428531d38a8960123e16a2810591c36d523a5269081543f7ac5914408ae63183",
                "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                "lastTradePrice": 0.8605492395220321,
                "lastTradePriceFormatted": "0.86",
                "lastTradeCostPerShare": 0.8605492395220321,
                "lastTradeCostPerShareFormatted": "0.86 CASH"
              },
              {
                "id": "-0x6efed81d9efb9092984fd0c797fc6497d3dd665b089ad76299fe30bb874aeee1",
                "name": "yco3a3tu7vte29",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x799cab8507685f2a0b1ce5226456b89d51e7fcb9fa0b83f26debaafb07779ee6",
                "name": "yt29q426426gvi",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0xe8805c30a1d26009cfe62bee8c37654a35513b1f4f990c7ce1db45ef02b07b9b",
                "name": "Will Bitcoin hit $500 by the end of 2015?",
                "lastTradePrice": 0.9808653535962055,
                "lastTradePriceFormatted": "0.98",
                "lastTradeCostPerShare": 0.9808653535962055,
                "lastTradeCostPerShareFormatted": "0.98 CASH"
              },
              {
                "id": "-0xc72a108f3081a9ed130a9bfd04f1d74842e3f47a535eb4bd0d98a084c170ee6b",
                "name": "Will it be a white christmas in the U.K. as defined by the MET office",
                "lastTradePrice": 5.0071801171742e-7,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 5.0071801171742e-7,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x58607418df987ca10a13ca9c9e30bc56c19761a838c1c2f6ae38490cd240d303",
                "name": "Will Donald Trump win the Republican primary in 2016?",
                "lastTradePrice": -1.580246e-14,
                "lastTradePriceFormatted": "-0.00",
                "lastTradeCostPerShare": -1.580246e-14,
                "lastTradeCostPerShareFormatted": "-0.00 CASH"
              },
              {
                "id": "-0xd0925b5df223a339a63f21343552e60044f9985c87d2c5e7f142a51348d00f6d",
                "name": "Will the S&P 500 go under 2000 points before 1 December 2015?",
                "lastTradePrice": 1.11283e-15,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 1.11283e-15,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0xab9c68620fceac7d1e9af9dc918bc45e9aa91ffbeb873b19c045fda44a3c548c",
                "name": "Will the price of gold go under $1000 before Jan 1, 2016 ?",
                "lastTradePrice": 3.5929828904e-10,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 3.5929828904e-10,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x2829788f834cba3d37bbaa3b9bf3f7aaf97dfb842e755ecfe337da0cc76aa5d",
                "name": "Will Hillary Clinton win the Democratic Primary in New Hampshire?",
                "lastTradePrice": 0.9999999999999917,
                "lastTradePriceFormatted": "1.00",
                "lastTradeCostPerShare": 0.9999999999999917,
                "lastTradeCostPerShareFormatted": "1.00 CASH"
              },
              {
                "id": "-0xbe99dc7329bd1a75c1c3244d30b5a04e0c783e72be714754d3c82a79c0d8cf47",
                "name": "Will Bernie Sanders win the Democratic Primary in New Hampshire?",
                "lastTradePrice": 0.5065112124597393,
                "lastTradePriceFormatted": "0.51",
                "lastTradeCostPerShare": 0.5065112124597393,
                "lastTradeCostPerShareFormatted": "0.51 CASH"
              },
              {
                "id": "-0x9da6914055b088f0975ec3b35445fd17a73b35c18722618e7e569ede0661c544",
                "name": "Will Hillary Clinton win the Democratic Primary in South Carolina?",
                "lastTradePrice": 0.5065112124597393,
                "lastTradePriceFormatted": "0.51",
                "lastTradeCostPerShare": 0.5065112124597393,
                "lastTradeCostPerShareFormatted": "0.51 CASH"
              },
              {
                "id": "-0x3349373fa86c7adf383159f761a3b359bd7bd863687b04fd8d13caf37d84ccf7",
                "name": "Will Hillary Clinton be elected President of the United States?",
                "lastTradePrice": 0.9999998088186108,
                "lastTradePriceFormatted": "1.00",
                "lastTradeCostPerShare": 0.9999998088186108,
                "lastTradeCostPerShareFormatted": "1.00 CASH"
              },
              {
                "id": "0xb134cb71e4c8dfb86228671e5586c758924a721fe9ddf09c1ba6d3afcafe61e",
                "name": "Will it rain in New York City on December 4th, 2015.",
                "lastTradePrice": 0.5065112124597393,
                "lastTradePriceFormatted": "0.51",
                "lastTradeCostPerShare": 0.5065112124597393,
                "lastTradeCostPerShareFormatted": "0.51 CASH"
              },
              {
                "id": "-0x5163f359270cb1a242e720b37462ea8e1e05b744897c6d99e6a560de20b9ec3e",
                "name": "Will the US Federal Reserve Bank raise interest rates on 16 December 2015?",
                "lastTradePrice": 0.0018668220837644908,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 0.0018668220837644908,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x45cccda02abe80e0d6c214dbb05d483016909f1169709346c50183074584212d",
                "name": "Will Santa Claus deliver presents to Syria this year?",
                "lastTradePrice": 0.5078045798122678,
                "lastTradePriceFormatted": "0.51",
                "lastTradeCostPerShare": 0.5078045798122678,
                "lastTradeCostPerShareFormatted": "0.51 CASH"
              },
              {
                "id": "-0x6f422242d411c18300f77e5d3f693a630773c73ba189c2bd935cbd2ceab73329",
                "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                "lastTradePrice": -1.2065e-15,
                "lastTradePriceFormatted": "-0.00",
                "lastTradeCostPerShare": -1.2065e-15,
                "lastTradeCostPerShareFormatted": "-0.00 CASH"
              },
              {
                "id": "-0xa460e57bff042205d5947eba0a3efe119375f910dd27c4ca4ca8ab271b79e2c6",
                "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                "lastTradePrice": 0.5413254957177456,
                "lastTradePriceFormatted": "0.54",
                "lastTradeCostPerShare": 0.5413254957177456,
                "lastTradeCostPerShareFormatted": "0.54 CASH"
              },
              {
                "id": "-0x58137ea5cb1d5f2e7d07118a339ee3bd444fa4c1e83f3e5368e3d8af4ece0f07",
                "name": "Will it rain in New York City on November 12, 2016?",
                "lastTradePrice": 0.5334647797912806,
                "lastTradePriceFormatted": "0.53",
                "lastTradeCostPerShare": 0.5334647797912806,
                "lastTradeCostPerShareFormatted": "0.53 CASH"
              },
              {
                "id": "-0x432e8a45c7ef6501cd5f487478b277114f264879e0797cb40ca292d1b544cb40",
                "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                "lastTradePrice": 0.5508944925845605,
                "lastTradePriceFormatted": "0.55",
                "lastTradeCostPerShare": 0.5508944925845605,
                "lastTradeCostPerShareFormatted": "0.55 CASH"
              },
              {
                "id": "-0xe29102b4d5ca718d85a0b323d6a9ac24e68f59c99bd5990f9ea9001d519c3250",
                "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                "lastTradePrice": 0.5320108371996579,
                "lastTradePriceFormatted": "0.53",
                "lastTradeCostPerShare": 0.5320108371996579,
                "lastTradeCostPerShareFormatted": "0.53 CASH"
              },
              {
                "id": "-0x5d0dc55b6e18428118dfc182fb421f36b86fb30ce6840d418a5cf3cbd1710ccb",
                "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                "lastTradePrice": 0.5389730750705896,
                "lastTradePriceFormatted": "0.54",
                "lastTradeCostPerShare": 0.5389730750705896,
                "lastTradeCostPerShareFormatted": "0.54 CASH"
              },
              {
                "id": "-0x6c830e4189b5e18173ad3c98b3529224998b5da32d05e7d1b2f8c5d7fe355641",
                "name": "h0hssd9aegsyvi",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x74857983b781f0d2ae988c7df5b264d0122f52493871b801aa5bb4a20a5e5884",
                "name": "l8x86naozjjor",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x97b53dae0d4473bd275105f69b677b518471575138e18313264652943ff672d6",
                "name": "afi937op3nmi",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x88428c41720de03fde05a2a3f762bbc20f18c47f66cde3090feff9a6ace92a9e",
                "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2015?",
                "lastTradePrice": 2.276131e-14,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 2.276131e-14,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x784af2e100c2fd461fe4d29329429c18edc95e2e6db1b3eef836a90b001eebd",
                "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                "lastTradePrice": 0.5413254957177456,
                "lastTradePriceFormatted": "0.54",
                "lastTradeCostPerShare": 0.5413254957177456,
                "lastTradeCostPerShareFormatted": "0.54 CASH"
              },
              {
                "id": "-0x8446e6b0808eb066d6c441845a806086791b5f1ccd6f370ec1a2b6a0d07c31e",
                "name": "Will it rain in New York City on November 12, 2016?",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x7ce397bc0ca391ebf1fe62c041085e65ea18de14fc79ccac12b89f5baf71944a",
                "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                "lastTradePrice": 1.06252e-15,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 1.06252e-15,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x549057123dd93ce610c30c32988495d3dd33557e6783fa1b044bfe132f567b3f",
                "name": "zxphpvcsl6usor",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0xeed9c718906aecf1a082b7472d88994b5b78797e869fb7aee9412aa8b83e1a54",
                "name": "5yfmh4ab8rggb9",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x4d66e1897ffd27a09a8c60ff485ad3cbc0c8d339ab4471e614608bdcc8b798f",
                "name": "Will Russia kill Turkish troops before February 1st, 2016?",
                "lastTradePrice": 3.2842534595e-10,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 3.2842534595e-10,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0xb529e1791f8dd2c8d15eed1f4b35c94bad7b2f32ae52f8abb6801d1842c427b0",
                "name": "EPL: Will Chelsea win the Barclays Premier League 2015/2016?",
                "lastTradePrice": 4.570476e-14,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 4.570476e-14,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x464d241af6bab8d826ba42e7fcd7fe3ea0b83971d1f9798054344c2b725f6f8b",
                "name": "Will the Alabama Crimson Tide college football team beat the Michigan State Spartans in the Cotton Bowl on December 31, 2015?",
                "lastTradePrice": 0.8463496288113034,
                "lastTradePriceFormatted": "0.85",
                "lastTradeCostPerShare": 0.8463496288113034,
                "lastTradeCostPerShareFormatted": "0.85 CASH"
              },
              {
                "id": "-0x5932c04cfb6df8275387fc5d15a9897d61a2ef598c7e60ae45829e9e1e3409e6",
                "name": "Will \"Star Wars - The Force Awakens\" gross the highest domestic weekend box office in history (according to box office mojo) on its starting weekend?",
                "lastTradePrice": -1.341462e-14,
                "lastTradePriceFormatted": "-0.00",
                "lastTradeCostPerShare": -1.341462e-14,
                "lastTradeCostPerShareFormatted": "-0.00 CASH"
              },
              {
                "id": "-0x7231f7b2050ceb1c4de99477105224127dd7aa0370668a029bb12975c8bb72eb",
                "name": "hjk hjk hjk hjk hkj hkjhjk",
                "lastTradePrice": 0.0004394025480990082,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 0.0004394025480990082,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x7c30e8e1d1b09ca9eb17af05c0ee9a6a3b76de6a8c245fec5523f4371185f144",
                "name": "0279j434zvkj4i",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x21b1215edad65ea682c56cb4cf2c5d6ae4c8e767c4fb4ab5ad0116bcb3e36f6f",
                "name": "h8i5ouf0ztzkt9",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0xd7a91c43c720e5d15c1ccb5caa204972460c6e80a023c0e10c859d4f3e268970",
                "name": "Will the Houston Real Time Hub Price for electricity in ERCOT break a block price of $35 for Hours 7-22 on December 17, 2015?",
                "lastTradePrice": 8.04912e-15,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 8.04912e-15,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "0xf1d447317b95a885cc65fe3313442585f42b3a6c5b0a1ba5beab8d28fd686a8",
                "name": "Will the North Real Time Hub Price for electricity in ERCOT break a block price of $35 for Hours 7-22 on December 17, 2015?",
                "lastTradePrice": 0.7380205487637284,
                "lastTradePriceFormatted": "0.74",
                "lastTradeCostPerShare": 0.7380205487637284,
                "lastTradeCostPerShareFormatted": "0.74 CASH"
              },
              {
                "id": "-0x1f46e984369f801065ee756c5d11d4ecbab352d14b1c53accd2b288363b4b189",
                "name": "Is Mike gay?",
                "lastTradePrice": 0.5065112124597393,
                "lastTradePriceFormatted": "0.51",
                "lastTradeCostPerShare": 0.5065112124597393,
                "lastTradeCostPerShareFormatted": "0.51 CASH"
              },
              {
                "id": "-0x3e1364205bbf59034e0177e5d06211862d6c70d670fd84388e986cc39b29e971",
                "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2016?",
                "lastTradePrice": 0.5350876278166969,
                "lastTradePriceFormatted": "0.54",
                "lastTradeCostPerShare": 0.5350876278166969,
                "lastTradeCostPerShareFormatted": "0.54 CASH"
              },
              {
                "id": "-0x69daf74a0f35919ad856c543e3e4b742f1870554ff607989f9cdbfb2aa064723",
                "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                "lastTradePrice": 0.5413254957177456,
                "lastTradePriceFormatted": "0.54",
                "lastTradeCostPerShare": 0.5413254957177456,
                "lastTradeCostPerShareFormatted": "0.54 CASH"
              },
              {
                "id": "-0x131d09536e499e2c2c0afd72220a9c3eae6d6d1ed20248f0e15c5b4869167106",
                "name": "Will it rain in New York City on November 12, 2016?",
                "lastTradePrice": 0.9970433087153328,
                "lastTradePriceFormatted": "1.00",
                "lastTradeCostPerShare": 0.9970433087153328,
                "lastTradeCostPerShareFormatted": "1.00 CASH"
              },
              {
                "id": "-0x1a3b9234c30ae153051e6348cf92a1af77c00311074e52e61a203540ae4d799a",
                "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                "lastTradePrice": 0.5471839144112761,
                "lastTradePriceFormatted": "0.55",
                "lastTradeCostPerShare": 0.5471839144112761,
                "lastTradeCostPerShareFormatted": "0.55 CASH"
              },
              {
                "id": "-0xe4c36d8a4e04796d76012ca418e770bd806ca8abdfb0760e89fceb3cc70dfc8a",
                "name": "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2015?",
                "lastTradePrice": 0.42283644424083167,
                "lastTradePriceFormatted": "0.42",
                "lastTradeCostPerShare": 0.42283644424083167,
                "lastTradeCostPerShareFormatted": "0.42 CASH"
              },
              {
                "id": "-0xba15db0ca2eff1ee7ab7ba7de6683b6436b6cfc025ddc3d037da1ad1ed574fa5",
                "name": "Will Microsoft's stock price at 12:00 UTC on July 1, 2016 be Higher, Lower, or Equal to $54.13?",
                "lastTradePrice": 0.4226548147512654,
                "lastTradePriceFormatted": "0.42",
                "lastTradeCostPerShare": 0.4226548147512654,
                "lastTradeCostPerShareFormatted": "0.42 CASH"
              },
              {
                "id": "-0xd55a06e46c8811387fbe2c2ef0e90640d49ca9edc47432d8fa80427595f231fe",
                "name": "Who will win the 2016 U.S. Presidential Election: Hillary Clinton, Donald Trump, Bernie Sanders, or someone else?",
                "lastTradePrice": 0.36101996157706706,
                "lastTradePriceFormatted": "0.36",
                "lastTradeCostPerShare": 0.36101996157706706,
                "lastTradeCostPerShareFormatted": "0.36 CASH"
              },
              {
                "id": "-0xfbb9a5eae61e06cd0e3f1141914415bc3260f5c2e1f40d506fad156ac0bcaa6",
                "name": "Which political party's candidate will win the 2016 U.S. Presidential Election: Democratic, Republican, Libertarian, or other?",
                "lastTradePrice": 0.36101996157706706,
                "lastTradePriceFormatted": "0.36",
                "lastTradeCostPerShare": 0.36101996157706706,
                "lastTradeCostPerShareFormatted": "0.36 CASH"
              },
              {
                "id": "-0x6b3f13828936d10035ea30510546eaa9314609ac1417053c2406362c290b5173",
                "name": "Which city will have the highest median single-family home price for September 2016: London, New York, Los Angeles, San Francisco, Tokyo, Palo Alto, Hong Kong, Paris, or other?",
                "lastTradePrice": 0.28486475796090466,
                "lastTradePriceFormatted": "0.28",
                "lastTradeCostPerShare": 0.28486475796090466,
                "lastTradeCostPerShareFormatted": "0.28 CASH"
              },
              {
                "id": "0xb9ebdd25f3d5f5d38f97b3988dcfd51e80e3da5665717e33185c69cc1027477",
                "name": "What will the high temperature (in degrees Fahrenheit) be in San Francisco, California, on July 1, 2016?",
                "lastTradePrice": 7.071633846385883,
                "lastTradePriceFormatted": "7.07",
                "lastTradeCostPerShare": 7.071633846385883,
                "lastTradeCostPerShareFormatted": "7.07 CASH"
              },
              {
                "id": "-0xbb3640f2a3611d73b71d38bf78462997d2cbea1fca1c438cb56b7eadfac14cd5",
                "name": "Will Augur suffer catastrophic failure before the end of 2016?",
                "lastTradePrice": 0.373928166884393,
                "lastTradePriceFormatted": "0.37",
                "lastTradeCostPerShare": 0.373928166884393,
                "lastTradeCostPerShareFormatted": "0.37 CASH"
              },
              {
                "id": "-0x1ef169990699de78b2c19c968fce204f7b207dcb5e66be194255d0d34457c3c7",
                "name": "2zd2buld5wb3xr",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x72adcde7143e63a368baa643ca017ee1110060eb4247e14cacfe9a619d5777b2",
                "name": "8pxtj53mh7iudi",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x2bc06a0716a718dd323ef922a8369f20773f555384e4e3f5360ad8c8982ff0d7",
                "name": "Will the average temperature on Earth in 2016 be Higher, Lower, or Unchanged from the average temperature on Earth in 2015?",
                "lastTradePrice": 0.3580144740482662,
                "lastTradePriceFormatted": "0.36",
                "lastTradeCostPerShare": 0.3580144740482662,
                "lastTradeCostPerShareFormatted": "0.36 CASH"
              },
              {
                "id": "-0xe5a80252d97dec8a2f1be1195d7665c558e8d65297f55771acb2f493f8a9054d",
                "name": "Will Microsoft's stock price at 12:00 UTC on July 1, 2016 be Higher, Lower, or Equal to $54.13?",
                "lastTradePrice": 0.35721039342270366,
                "lastTradePriceFormatted": "0.36",
                "lastTradeCostPerShare": 0.35721039342270366,
                "lastTradeCostPerShareFormatted": "0.36 CASH"
              },
              {
                "id": "-0xe4fc39ba23631024d5c66bbb2f13d9c275095574d6a1cc00f6e2433646ba4783",
                "name": "Who will win the 2016 U.S. Presidential Election: Hillary Clinton, Donald Trump, Bernie Sanders, or someone else?",
                "lastTradePrice": 0.27167436559734975,
                "lastTradePriceFormatted": "0.27",
                "lastTradeCostPerShare": 0.27167436559734975,
                "lastTradeCostPerShareFormatted": "0.27 CASH"
              },
              {
                "id": "-0xc2894be84686a616e2b4b99299d02952ed3d9d4a36b4f20a2e7173bdd287dbfb",
                "name": "Which political party's candidate will win the 2016 U.S. Presidential Election: Democratic, Republican, Libertarian, or other?",
                "lastTradePrice": 0.27167436559734975,
                "lastTradePriceFormatted": "0.27",
                "lastTradeCostPerShare": 0.27167436559734975,
                "lastTradeCostPerShareFormatted": "0.27 CASH"
              },
              {
                "id": "-0x1522a508fb9946e751629459345a2c38b8060b6c0d4414639f8326b769931411",
                "name": "Which city will have the highest median single-family home price for September 2016: London, New York, Los Angeles, San Francisco, Tokyo, Palo Alto, Hong Kong, Paris, or other?",
                "lastTradePrice": 0.1301327143705307,
                "lastTradePriceFormatted": "0.13",
                "lastTradeCostPerShare": 0.1301327143705307,
                "lastTradeCostPerShareFormatted": "0.13 CASH"
              },
              {
                "id": "-0xd5f5831fa7edf9e16048657e7c4ab71c6ce6e7c4dda31649d4805df7dfd09a55",
                "name": "What will the high temperature (in degrees Fahrenheit) be in San Francisco, California, on July 1, 2016?",
                "lastTradePrice": 1.1581823057744989,
                "lastTradePriceFormatted": "1.16",
                "lastTradeCostPerShare": 1.1581823057744989,
                "lastTradeCostPerShareFormatted": "1.16 CASH"
              },
              {
                "id": "-0xc90b312034a3ea5a64b32e2768488666992b52c961eaba6de11de388c0ed92",
                "name": "Will the Sun turn into a red giant and engulf the Earth by the end of 2016?",
                "lastTradePrice": 0.5471839144112761,
                "lastTradePriceFormatted": "0.55",
                "lastTradeCostPerShare": 0.5471839144112761,
                "lastTradeCostPerShareFormatted": "0.55 CASH"
              },
              {
                "id": "-0xe35b02a2590bcbb8d7bdcb110d25155ea51ef7c91e7750e597150595ca2af4e3",
                "name": "Will Rand Paul win the 2016 U.S. Presidential Election?",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x2cd8bc893a43a9a8104ad007f6c17f650d0b37dfe142edc9618cf0eaab4058f0",
                "name": "Will it rain in New York City on November 12, 2016?",
                "lastTradePrice": 0.5440334641703168,
                "lastTradePriceFormatted": "0.54",
                "lastTradeCostPerShare": 0.5440334641703168,
                "lastTradeCostPerShareFormatted": "0.54 CASH"
              },
              {
                "id": "-0x8c01e6c7e04758ec9212cd99cf7ed260583ba68bc8fa8f9f325986850f21638e",
                "name": "Will the Larsen B ice shelf collapse by November 1, 2016?",
                "lastTradePrice": 3.16761e-15,
                "lastTradePriceFormatted": "0.00",
                "lastTradeCostPerShare": 3.16761e-15,
                "lastTradeCostPerShareFormatted": "0.00 CASH"
              },
              {
                "id": "-0x6f0b08f4770d3ed6518afb64378361830888381569d112eeb8f9d8cb85138260",
                "name": "xkhy4lrhi1kyb9",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              },
              {
                "id": "-0x5e4cdec99fdb09d798b10f01a4db8dd96185dc21a12f498d967c1db4316bccde",
                "name": "tf1w2tm1butyb9",
                "lastTradePrice": 0.5553283405211205,
                "lastTradePriceFormatted": "0.56",
                "lastTradeCostPerShare": 0.5553283405211205,
                "lastTradeCostPerShareFormatted": "0.56 CASH"
              }
            ]);
        }
    };

    return ["$q", ($q) => {
        function promisify(methodName, ...parameters) {
            const defer = $q.defer();
            if (methodName === "getMarketsSummary" ||
                methodName === "getMostActive" ||
                methodName === "getClosingPrices") {
                stub[methodName](...parameters, defer.resolve);
            } else {
                window.augur[methodName](...parameters, defer.resolve);
            }
            return defer.promise;
        }

        return {
            getDescription(id) {
                return promisify("getDescription", id);
            },
            getBranches() {
                return promisify("getBranches");
            },
            getMarkets(branchId) {
                return promisify("getMarkets", branchId);
            },
            getMarketInfo(marketId) {
                return promisify("getMarketInfo", marketId);
            },
            getMarketsInfo(branchId, offset, numMarketsToLoad) {
                return promisify("getMarketsInfo", branchId, offset, numMarketsToLoad);
            },
            getMarketsSummary(branchId) {
                return promisify("getMarketsSummary", branchId);
            },
            getMostActive(branchId) {
                return promisify("getMostActive", branchId);
            },
            getClosingPrices(marketId) {
                return promisify("getClosingPrices", marketId);
            }
        };
    }];
});
