function sortArrayByParity(arr: number[]): number[] {
  let low = 0,
    high = arr.length - 1;

  while (low < high) {
    if (arr[low] % 2 === 0) {
      low++;
    }

    if (arr[high] % 2 === 1) {
      high--;
    }

    if (arr[low] % 2 === 1 && arr[high] % 2 === 0) {
      const temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
      high--;
      low++;
    }
  }

  return arr;
}
