function topKFrequent(arr: number[], k: number): number[] {
    const freq: Record<string, number> = {};

    arr.forEach((num) => {
        if (num in freq) freq[num]++;
        else freq[num] = 1;
    });

    const temp: number[][] = [...new Array(arr.length + 1)].map(() => []);

    // console.log(freq);

    Object.keys(freq).forEach((key) => {
        temp[freq[key]].push(Number.parseInt(key));
    });

    // console.log(temp);

    let ans: number[] = [];

    for (let i = temp.length - 1; i > 0 && k > 0; i--) {
        if (temp[i].length > k) {
            ans = [...ans, ...temp[i].slice(0, k)];
            k = 0;
        } else {
            ans = [...ans, ...temp[i]];
            k -= temp[i].length;
        }
    }

    return ans;
}
