const countOnes = (arr: number[]): number =>
    arr.reduce((acc, curr) => (curr === 1 ? acc + 1 : acc), 0);

function kWeakestRows(mat: number[][], k: number): number[] {
    const ones: Record<number, number> = {};

    for (let i = 0; i < mat.length; i++) {
        ones[i] = countOnes(mat[i]);
    }

    const temp = Object.keys(ones)
        .sort((a, b) => ones[a] - ones[b])
        .slice(0, k)
        .map((a) => Number.parseInt(a));

    return temp;
}
