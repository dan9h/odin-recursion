function fibsRec(n) {
  if (n < 1) return []
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  const fibs = fibsRec(n - 1)
  const [a, b] = fibs.slice(-2)

  return fibs.concat(a + b)
}

module.exports = fibsRec
