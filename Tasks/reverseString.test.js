const reverseString = require('./reverseString.js');

test('reverse the string', () => {
    expect(reverseString('hii')).toBe('iih');
})