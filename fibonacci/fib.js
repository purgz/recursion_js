//fibonnaci using interative approach
/*
let nums = [];
function fibs(count) {
  nums[0] = 0;
  if (count == 1) {
    return nums;
  }
  nums[1] = 1;

  for (let i = 2; i < count; i++) {
    nums[i] = nums[i - 2] + nums[i - 1];
  }
  return nums;
}
*/

//fibonacci using recursion witha  helper function 

let nums = [];

function fibs(count) {
  nums[0] = 0;
  if (count == 1) {
    return nums;
  }
  nums[1] = 1;

  for (let i = 2; i < count; i++) {
    nums[i] = recursiveFibs(i);
  }
  return nums;
}

function recursiveFibs(count) {
  if (count < 2) {
    return 1;
  }

  return recursiveFibs(count - 2) + recursiveFibs(count - 1);
}

console.log(fibs(9));
