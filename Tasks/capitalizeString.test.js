const capitalize = require('./capitalizeString.js');

test('returns string with the first character capitalized', () => {
    expect(capitalize('abdullah')).toBe('Abdullah')
})