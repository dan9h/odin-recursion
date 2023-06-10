const fibonacci = require('../fibonacci')

const fibsRec8 = fibonacci.fibsRec(8)

test('should contain 8 elements', () => {
  expect(fibsRec8).toHaveLength(8)
})

test('last element should be 13', () => {
  expect(fibsRec8.pop()).toEqual(13)
})
