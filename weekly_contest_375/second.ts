const pow = (x: number, y: number, p: number) => {
    // returns x^ymodp
    let res = 1;
    x %= p;

    if (x === 0) return 0;

    while (y > 0) {
        if (y & 1) {
            res = (res * x) % p;
        }
        y = y >> 1;
        x = (x * x) % p;
    }
    return res;
};

function getGoodIndices(variables: number[][], target: number): number[] {
    let indicies: number[] = [];

    variables.forEach(([a, b, c, m], i) => {
        let temp = pow(a, b, 10);
        // console.log(temp);
        let temp1 = pow(temp, c, m);
        // console.log(temp1);
        if (temp1 === target) {
            indicies.push(i);
        }
    });

    return indicies;
}

getGoodIndices([[3, 2, 2, 3]], 0);
