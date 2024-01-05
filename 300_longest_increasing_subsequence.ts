function lengthOfLIS(arr: number[]): number {
  let ans = 1;
  const dp: number[] = new Array<number>(arr.length).fill(1);
  // every single index, is possible, so, each possible index will definitely
  // be a part of the subsequence every single index, is possible, so, each possible index will definitely
  // be a part of the subsequence
  for (let i = 1; i < arr.length; i++) {
    let currLongest = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        currLongest = Math.max(currLongest, dp[j]);
      }
    }
    dp[i] = currLongest + 1;
    ans = Math.max(dp[i], ans);
  }
  return ans;
}
