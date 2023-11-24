function countBits(n: number): number[] {
    const ans: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[Math.floor(i / 2)] + (i % 2);
    }
    return ans;
}
