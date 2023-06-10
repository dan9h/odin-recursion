const mergeSort = require('../mergeSort')

const merged = mergeSort([3, 4, 2, 1, 7, 5, 8, 9, 0, 6])

test('length should be the same', () => {
  expect(merged).toHaveLength(10)
})

test('should sort the array', () => {
  expect(merged).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})
