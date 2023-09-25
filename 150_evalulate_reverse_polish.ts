const isOperator = (s: string) => {
    return s === "+" || s === "-" || s === "*" || s === "/";
};

const operate = (x: number, y: number, operator: string) => {
    if (operator === "+") return x + y;
    if (operator === "-") return x - y;
    if (operator === "*") return x * y;
    return Math.floor(Math.abs(x / y)) * Math.sign(x) * Math.sign(y);
};

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    tokens.forEach((token) => {
        if (isOperator(token)) {
            let second = stack.pop() as number;
            let first = stack.pop() as number;
            stack.push(operate(first, second, token));
        } else {
            stack.push(Number.parseInt(token));
        }
    });
    return stack.pop() as number;
}

console.log(
    evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ])
);
