function mergeSort (array) {
  if (array.length <= 1) return array

  const mid = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, mid))
  const right = mergeSort(array.slice(mid))

  return ((left, right) => {
    const merged = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i++])
      } else {
        merged.push(right[j++])
      }
    }

    while (i < left.length) {
      merged.push(left[i++])
    }

    while (j < right.length) {
      merged.push(right[j++])
    }

    return merged
  })(left, right)
}

module.exports = mergeSort
