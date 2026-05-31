function secondLargest(nums) {

  // remove duplicates
  const uniqueNums = [...new Set(nums)];
  // if there are less than 2 unique numbers, return null
  if (uniqueNums.length < 2) {
    return null;
  }

  // sort in descending order
  uniqueNums.sort((a, b) => b - a);

  // return the second largest number
  return uniqueNums[1];

}

console.log(secondLargest([10, 5, 20, 20, 8, 10])); // 10

console.log(secondLargest([4, 4, 4])); // null