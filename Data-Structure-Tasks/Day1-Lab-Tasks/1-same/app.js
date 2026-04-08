// same	Check squared values + frequency

// Frequency Counter
// o(n)

// Nullish Coalescing
// freq1[num] = (freq1[num] ?? 0) + 1;

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let num of arr1) {
    freq1[num] = (freq1[num] || 0) + 1;
  }

  for (let num of arr2) {
    freq2[num] = (freq2[num] || 0) + 1;
  }

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) return false;
    if (freq2[key ** 2] !== freq1[key]) return false;
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
