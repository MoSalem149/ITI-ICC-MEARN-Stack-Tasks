// Insertion sort
// Worst case: O(n^2)
// Best case: O(n) if Sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const arr = [5, 2, 6, 1, 8, 7]; // [1, 2, 5, 6, 7, 8]
console.log(insertionSort(arr));
