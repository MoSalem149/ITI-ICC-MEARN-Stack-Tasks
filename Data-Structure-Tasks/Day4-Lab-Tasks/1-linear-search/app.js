// Linear Search
// o(n)
// unsorted array

function ls(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

const nums = [1, 2, 3, 4, 5];
console.log(ls(nums, 4)); // 3
console.log(ls(nums, 6)); // -1
