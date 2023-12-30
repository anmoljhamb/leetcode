// paramterized way.

function sum_till_n_1(n: number, sum: number = 0) {
    if (n < 1) {
        console.log(sum);
        return;
    }
    sum_till_n_1(n - 1, sum + n);
}

sum_till_n_1(10);

// Functional Recursion

function sum_till_n_2(n: number) {
    if (n < 1) {
        return 0;
    }
    return n + sum_till_n_2(n - 1);
}

console.log(sum_till_n_2(10));
