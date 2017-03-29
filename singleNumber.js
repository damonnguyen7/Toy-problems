/*
You are given an array of integers in which every element appears twice, except for one. 
Find the element that only appears one time. Your solution should have a linear runtime complexity (O(n)). 
Try to implement it without using extra memory.

For nums = [2, 2, 1], the output should be
singleNumber(nums) = 1.
*/

function singleNumber(nums) {
  var numsIndex = {};
  for (var i = 0; i < nums.length; i++) {
    if (numsIndex[nums[i]] === undefined) {
      numsIndex[nums[i]] = 1;
    } else {
      numsIndex[nums[i]]++;
    }
  }
  for (var num in numsIndex) {
    if (numsIndex[num] === 1) {
      return Number(num);
    }
  }
}
