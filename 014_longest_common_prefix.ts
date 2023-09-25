function longestCommonPrefix(strs: string[]): string {
    let ans = "";
    const shortestLength = strs.reduce(
        (acc, curr) => Math.min(acc, curr.length),
        Infinity
    );
    for (let i = 0; i < shortestLength; i++) {
        let isCommon = true;
        for (let currIndex = 1; currIndex < strs.length; currIndex++) {
            if (strs[currIndex][i] !== strs[currIndex - 1][i]) {
                return ans;
            }
        }
        ans += strs[0][i];
    }
    return ans;
}
