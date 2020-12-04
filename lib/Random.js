"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumbers = void 0;
var randomNumbers = function (amount) {
    var result = [];
    for (var count = 0; count < amount; count++) {
        result.push(Math.random());
    }
    return result;
};
exports.randomNumbers = randomNumbers;
