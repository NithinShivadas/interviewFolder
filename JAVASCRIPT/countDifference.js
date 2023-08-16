function findCommonElements(arr1, arr2) {
  const commonElements = arr1.filter((item) => arr2.includes(item));
  const uniqueElements = [...new Set([...arr1, ...arr2])];
  var CountOfCommonelements = commonElements.length;
  var countOfuniqueelements = uniqueElements.length;
  var score = Math.floor((CountOfCommonelements / countOfuniqueelements) * 100);
  console.log(
    `Common elements - ${commonElements} and count is :${CountOfCommonelements}`
  );
  console.log(
    `unique elements - ${uniqueElements} and count is :${countOfuniqueelements}`
  );
  console.log(
    `Score - ${CountOfCommonelements}/${countOfuniqueelements}*100 = ${score}`
  );
}

//  arrays
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 3, 2, 8];
// Calling function
findCommonElements(array1, array2);
