function maximumOddBinaryNumber(s: string): string {
    const n = s.length;
    let low = 0,
        high = n - 1;
    const str = s.split("");

    if (str[high] !== "1") {
        while (low <= high && str[low] !== "1") {
            low++;
        }
        str[low] = "0";
        str[high] = "1";
    }

    high -= 1;
    low = 0;

    while (low < high) {
        if (str[low] === "1") {
            low++;
        } else if (str[high] === "0") {
            high--;
        } else if (str[low] === "0" && str[high] === "1") {
            str[high] = "0";
            str[low] = "1";
            low++;
            high--;
        }
    }
    return str.join("");
}

console.log(maximumOddBinaryNumber("010"));
