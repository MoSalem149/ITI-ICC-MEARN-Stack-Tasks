// Binary Search
// o(log n)
// sorted array

function bsr(arr, target, left, right) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return bsr(arr, target, mid + 1, right);
  else return bsr(arr, target, left, mid - 1);
}

const nums = [2, 5, 10, 18, 25, 36, 42];
console.log(bsr(nums, 25, 0, 6)); // 4
console.log(bsr(nums, 7, 0, 6)); // -1
