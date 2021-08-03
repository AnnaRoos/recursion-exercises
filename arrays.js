const mergeSort = (array, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSort(array, startIndex, midIndex);
    mergeSort(array, midIndex + 1, endIndex);
    merge(array, startIndex, midIndex, endIndex);
  }
  return array;
};

const merge = (array, startIndex, midIndex, endIndex) => {
  const tempArray = [];
  let i = startIndex;
  let j = midIndex + 1;
  let k = 0;

  while (i <= midIndex && j <= endIndex) {
    if (array[i] <= array[j]) {
      tempArray[k++] = array[i++];
    } else {
      tempArray[k++] = array[j++];
    }
  }

  while (i <= midIndex) {
    tempArray[k++] = array[i++];
  }

  while (j <= endIndex) {
    tempArray[k++] = array[j++];
  }

  for (let i = startIndex; i <= endIndex; i++) {
    array[i] = tempArray[i - startIndex];
  }
};

const array = [9, 6, 4, 8, 5, 1];
console.log(mergeSort(array, 0, array.length - 1));
