//-------------UNIQUE ELEMENTS---------------
function findUniqueElements(arr) {
  let uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }

  return uniqueElements;
}

const inputArray = [1, 2, 3, 2, 4, 5, 1, 6, 3];
const uniqueArray = findUniqueElements(inputArray);

console.log("Original Array:", inputArray);
console.log("Unique Elements:", uniqueArray);









