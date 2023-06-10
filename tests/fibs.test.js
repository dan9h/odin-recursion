const fibonacci = require('../fibonacci')

const fibs8 = fibonacci.fibs(8)

test('should contain 8 elements', () => {
  expect(fibs8).toHaveLength(8)
})

test('last element should be 13', () => {
  expect(fibs8.pop()).toEqual(13)
})
