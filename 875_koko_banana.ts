function canKSolve(piles: number[], k: number, h: number) {
    let ans = 0;
    for (let i = 0; i < piles.length; i++) {
        ans += Math.ceil(piles[i] / k);
    }
    return ans <= h;
}

function minEatingSpeed(piles: number[], h: number): number {
    const max = piles.reduce((curr, val) => Math.max(curr, val), -Infinity);
    let ans = max;
    let low = 1,
        high = max;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canKSolve(piles, mid, h)) {
            ans = Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}
