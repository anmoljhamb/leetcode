function maxSlidingWindow(arr: number[], k: number): number[] {
    const ans: number[] = [];
    let max = -Infinity;
    let low = 0,
        high = k;
    for (let i = 0; i < k; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    ans.push(max);
    for (let i = k; i < arr.length; i++) {
        const lastMax = ans[ans.length - 1];
        if (arr[low] === lastMax) {
            if (arr[high] >= arr[low]) {
                ans.push(arr[high]);
            } else {
            }
        } else {
            ans.push(Math.max(arr[high], lastMax));
        }
        low++;
        high++;
    }

    return ans;
}
