/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) 
{   
    // Complete the function
    nums.sort(function(x, y) { return x < y; } );
    for(var i=0;i<nums.length;i++)
      {
        if(nums[i]>nums[i+1])
            {
               return nums[i+1];               
            }
      }
}

