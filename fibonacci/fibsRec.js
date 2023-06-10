function fibsRec (n) {
  if (n < 1) return []
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  const [a, b] = fibsRec(n - 1).slice(-2)
  return fibsRec(n - 1).concat(a + b)
}

module.exports = fibsRec
