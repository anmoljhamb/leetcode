function topKFrequent(arr: number[], k: number): number[] {
    const freq: Record<string, number> = {};

    arr.forEach((num) => {
        if (num in freq) freq[num]++;
        else freq[num] = 1;
    });

    return Object.keys(freq)
        .sort((a, b) => freq[b] - freq[a])
        .slice(0, k)
        .map((key) => Number.parseInt(key));
}
