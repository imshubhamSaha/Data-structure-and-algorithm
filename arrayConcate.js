/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = new Array(2 * nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }

  return ans;
};

console.log(getConcatenation([1, 2, 1]));

/*
Test cases 
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
*/

/*
T.C - O(length of i/p array) -> O(n)
S.C - O(2*size of i/p array)
*/
