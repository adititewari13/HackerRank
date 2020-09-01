
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) 
  {
    const multiply=nums.map((nums)=>(nums%2==0?2:3)*nums);
    return multiply;
  }

