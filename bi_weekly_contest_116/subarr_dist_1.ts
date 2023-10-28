function sumCounts(arr: number[]): number {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        const currSet = new Set<number>();
        for (let j = i; j < arr.length; j++) {
            currSet.add(arr[j]);
            ans += currSet.size * currSet.size;
        }
    }
    return ans;
}
