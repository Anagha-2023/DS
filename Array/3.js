const nums = [4, 1, 2, 1, 2];

function findSingleNonDuplicate(nums) {

  let result = 0;
  for (let num of nums) {
      result ^= num; 
  }
  return result;
}

console.log(findSingleNonDuplicate(nums));
