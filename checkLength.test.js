const stringLength = require('./checkLength.js') ;

test('count string characters', () => {
    const hi = 'hellohahah' 
    expect(stringLength(hi)).toBeLessThanOrEqual(10);
    expect(stringLength(hi)).toBeGreaterThanOrEqual(1);
});