const checkIthBit = (x: number, i: number) => {
    // check if the ith bit is set or not.
    return (x & (1 << i)) !== 0;
};

function findKOr(arr: number[], k: number): number {
    let answer = 0;
    const freq: Record<number, number[]> = {};

    for (let i = 0; i <= 32; i++) {
        freq[i] = [];
    }

    arr.forEach((num) => {
        for (let i = 0; i <= 32; i++) {
            if (checkIthBit(num, i)) {
                freq[i].push(num);
            }
        }
    });

    for (let i = 0; i <= 32; i++) {
        if (freq[i].length >= k) {
            answer = answer | (1 << i);
        }
    }

    return answer;
}
