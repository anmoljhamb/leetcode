function findChampion(n: number, edges: number[][]): number {
    const isChampion = new Array(n).fill(true);
    for (let i = 0; i < edges.length; i++) {
        const [first, second] = edges[i];
        isChampion[second] = false;
    }

    let answer = -1;

    for (let i = 0; i < n; i++) {
        if (isChampion[i]) {
            if (answer !== -1) return -1;
            answer = i;
        }
    }

    return answer;
}
