function makeKey(str: string): string {
    const temp = "a".charCodeAt(0);
    const count = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        count[str.charCodeAt(i) - temp] += 1;
    }
    return count.join("-");
}

function groupAnagrams(strs: string[]): string[][] {
    // const ans: string[][] = [];
    const temp: Record<string, string[]> = {};

    strs.forEach((str) => {
        const key = makeKey(str);
        if (key in temp) {
            temp[key].push(str);
        } else {
            temp[key] = [str];
        }
    });

    return Object.keys(temp).map((key) => temp[key]);
}
