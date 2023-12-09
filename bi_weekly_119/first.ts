function findIntersectionValues(arr1: number[], arr2: number[]): number[] {
    const ans = [0, 0];
    const freq1: Record<number, number> = {};
    const freq2: Record<number, number> = {};

    arr1.forEach((x) => {
        if (x in freq1) freq1[x]++;
        else freq1[x] = 1;
    });

    arr2.forEach((x) => {
        if (x in freq2) freq2[x]++;
        else freq2[x] = 1;
    });

    arr1.forEach((x) => {
        if (x in freq2) {
            ans[0]++;
        }
    });

    arr2.forEach((x) => {
        if (x in freq1) {
            ans[1]++;
        }
    });

    return ans;
}
