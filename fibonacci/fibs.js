function fibs(n) {
  if (n < 1) return []
  if (n === 1) return [0]

  const sequence = [0, 1]
  let [a, b] = sequence

  while (sequence.length < n) {
    ;[a, b] = [b, a + b]
    sequence.push(b)
  }

  return sequence
}

module.exports = fibs
