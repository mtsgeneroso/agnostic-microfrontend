var assert = require('assert');
var sum = require('./sum');
describe('Utils', () => {
  describe('#sum()', () => {
    it('deve retornar 3 quando os valores passados são 1 e 2', () => {
      assert.equal(sum(1, 2), 3);
    });
  });
});
