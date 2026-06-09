const findIntersection = (arr1, arr2) => {

  const set1 = new Set(arr1);

  return [...new Set(
    arr2.filter(num => set1.has(num))
  )];
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(findIntersection(arr1, arr2));