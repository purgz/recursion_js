//fibonnaci using interative approach
let nums = [];
function fibs(count) {
  nums[0] = 0;
  if (count == 1) {
    return nums;
  }
  nums[1] = 1;

  for (let i = 2; i < count; i++) {
    console.log("ii");
    nums[i] = nums[i - 2] + nums[i - 1];
  }
  return nums;
}

console.log(fibs(8));
