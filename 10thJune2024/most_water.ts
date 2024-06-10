function solve(arr: number[]) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && arr[left] >= arr[i]) {
      left--;
    }

    while (right < arr.length && arr[right] >= arr[i]) {
      right++;
    }

    const length = right - 1 - (left + 1) + 1;
    console.log(`${arr[i]}: [${left + 1}, ${right - 1}], length: ${length}`);
    result = Math.max(result, arr[i] * length);
  }
  return result;
}

const arr = [2, 5, 3, 6, 7, 4, 8, 1, 3];

console.log(solve(arr));
