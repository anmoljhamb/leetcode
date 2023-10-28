function minChanges(s: string): number {
    let startIndexOfAns = 0;
    let ans = 0;

    let low = 0;
    let countZ = 0;
    let countO = 0;

    while (low < s.length - 1) {
        if (s[low] === s[low + 1]) {
        } else {
            if (s[low] === "0") countZ++;
            if (s[low] === "1") countO++;
            if (s[low + 1] === "0") countZ++;
            if (s[low + 1] === "1") countO++;
        }
        low = low + 2;
    }

    return Math.min(countZ, countO);
}

console.log(minChanges("1000"));
