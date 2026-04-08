// Bubble sort
// Worst case: O(n^2)
// Best case: O(n) if Sorted

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const arr = [5, 2, 6, 1, 8, 7]; // [1, 2, 5, 6, 7, 8]
console.log(bubbleSort(arr));
