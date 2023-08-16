//------------THIRD LARGEST NUMBER IN ARRAY------------
function findThirdLargest(arr) {
    if (arr.length < 3) {
      return "Array doesn't have enough elements";
    }

    // Sort the array in descending order
    const sortArray=arr.sort((a, b) => b - a);

    return sortArray[2];
  }

  const inputArray = [9, 5, 7, 2, 8, 4];
  const thirdLargest = findThirdLargest(inputArray);

  console.log("Input Array:", inputArray);
  console.log("Third Largest Element:", thirdLargest);
