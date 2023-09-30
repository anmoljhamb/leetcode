const helper = (x: number) => {
    if (x % 3 === 0) return x / 3;
    if (x % 3 === 2) return 1 + (x - 2) / 3;
    return 2 + (x - 4) / 3;
};

function minOperations(arr: number[]): number {
    const freq: Record<number, number> = {};
    arr.forEach((num) => {
        if (num in freq) freq[num]++;
        else freq[num] = 1;
    });
    let ans = 0;
    let keys = Object.keys(freq);
    for (let i = 0; i < keys.length; i++) {
        const currFreq = freq[keys[i]];
        if (currFreq < 2) return -1;
        ans += helper(currFreq);
    }
    return ans;
}

console.log(minOperations([1, 1, 2, 3, 2, 3]));
