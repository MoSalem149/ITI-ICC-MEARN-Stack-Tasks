// Binary Search
// o(log n)
// sorted array

function bsi(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const nums = [2, 5, 10, 18, 25, 36, 42];
console.log(bsi(nums, 25)); // 4
console.log(bsi(nums, 7)); // -1
