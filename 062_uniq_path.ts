function uniquePaths(m: number, n: number): number {
    const factorials: number[] = [0];

    for (let i = 1; i <= m + n - 2; i++) {
        factorials.push(i * factorials[i - 1]);
    }

    return factorials[m + n - 2] / (factorials[m - 1] * factorials[n - 1]);
}
