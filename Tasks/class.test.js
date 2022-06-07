const calculate = require('./class.js')

const newCalculator = new calculate();

describe('calculation', () => {
    const number = 6;
    test('add number',() => {
        expect(newCalculator.add(number)).toBe(11);
    });
    test('subtract number',() => {
        expect(newCalculator.subtract(number)).toBe(4);
    });
    test('divide number',() => {
        expect(newCalculator.divide(number)).toBe(3);
    });
    test('multiply number',() => {
        expect(newCalculator.multiply(number)).toBe(12);
    });
})