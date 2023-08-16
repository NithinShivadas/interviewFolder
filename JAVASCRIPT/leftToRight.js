//-----left element move to last-----------
function moveElementsToLeft(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const firstElement = arr.shift();
    arr.push(firstElement);

    return arr;
  }

  const inputArray = [ 3, 5, 7, 9, 11];
  console.log("Original Array:", inputArray);

  const shiftedArray = moveElementsToLeft(inputArray);
  console.log("Array After Moving Elements to the Left:", shiftedArray);
