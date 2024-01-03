function numberOfBeams(bank: string[]): number {
    let ans = 0
    let prev_val = 0

    for (let i = 0; i < bank.length; i++) {
        let curr = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === "1") curr++;
        }
        if (curr !== 0) {
            if (prev_val === 0)
                prev_val = curr
            else {
                ans += prev_val * curr
                prev_val = curr
            }
        }
    }
    return ans;
};
