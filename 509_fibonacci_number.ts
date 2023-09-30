function fib(n: number, memo: Record<number, number> = {}): number {
    if (n in memo) return memo[n];
    if (n < 2) return n;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
