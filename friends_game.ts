function util(
  arr: number[],
  l: number,
  r: number,
  memo: Record<string, number> = {},
) {
  if (`${l}-${r}` in memo) return memo[`${l}-${r}`];
  if (l >= r) {
    return 0;
  }

  let left = arr[l];
  // oponent chooses l+1
  const left_l = util(arr, l + 2, r, memo);
  // opponent chooses r
  const left_r = util(arr, l + 1, r - 1, memo);

  left = left + Math.min(left_l, left_r);

  let right = arr[r];
  // opponent chooses l
  const right_l = util(arr, l + 1, r - 1, memo);
  // opponent chooses r-2
  const right_r = util(arr, l, r - 2, memo);

  right = right + Math.min(right_r, right_l);

  memo[`${l}-${r}`] = Math.max(left, right);

  return memo[`${l}-${r}`];
}

function solve(arr: number[]) {
  return util(arr, 0, arr.length - 1);
}

console.log(solve([30, 50, 10, 20]));
console.log(solve([20, 10, 30, 160]));
console.log(solve([20, 10, 30, 160, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5]));
