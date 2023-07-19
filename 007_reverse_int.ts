function _rev(x: string) {
    return x.split("").reverse().join("");
}

function reverse(x: number): number {
    const lowerLimit = -Math.pow(2, 31);
    const upperLimit = Math.pow(2, 31) - 1;
    let xStr = x.toString();

    if (x < 0) {
        xStr = xStr.substring(1);
    }

    let ans = Number.parseInt(_rev(xStr));

    if (x < 0) {
        ans *= -1;
    }

    if (ans < lowerLimit || ans > upperLimit) return 0;

    return ans;
}
