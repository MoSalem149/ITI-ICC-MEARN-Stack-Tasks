// Merge sort
// Worst case: O(n log n)
// Best case: O(n log n)

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let result = [];

  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return result.concat(left, right);
}

const arr = [5, 2, 6, 1, 8, 7]; // [1, 2, 5, 6, 7, 8]
console.log(mergeSort(arr));
