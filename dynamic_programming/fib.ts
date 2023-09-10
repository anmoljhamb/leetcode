const fib = (n: number): number => {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};

const fib_m = (n: number, memo: Record<number, number> = {}): number => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib_m(n - 1, memo) + fib_m(n - 2, memo);
    return memo[n];
};

console.log(fib(42));
console.log(fib_m(100));
