const gridTraveller = (m: number, n: number): number => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

const gridTraveller_memo = (
    m: number,
    n: number,
    memo: Record<string, number> = {}
) => {
    const key = m + "-" + n;
    if (key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] =
        gridTraveller_memo(m - 1, n, memo) + gridTraveller_memo(m, n - 1, memo);
    memo[n + "-" + m] = memo[key];

    return memo[key];
};

console.log(gridTraveller_memo(20, 30));
