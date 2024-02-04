const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sumFor(testNums));

const sumWhile = (nums) => {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
};

console.log(sumWhile(testNums)); // Output: 10

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(testNums)); // Output: 10

// Function using Underscore's _.reduce method
const sumTheSimpleWay = (nums) => _.reduce(nums, function (memo, num) { return memo + num; }, 0);

console.log(sumTheSimpleWay(testNums));
