function maxSlidingWindow(arr: number[], k: number): number[] {
    const ans: number[] = [];
    let low = 0;
    const q: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        while (q.length > 0 && arr[q[q.length - 1]] < arr[i]) {
            q.pop();
        }
        q.push(i);
        if (low > q[0]) {
            q.shift();
        }
        if (i + 1 >= k) {
            ans.push(arr[q[0]]);
            low++;
        }
    }

    return ans;
}
