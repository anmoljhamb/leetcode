function makeKey(str: string): string {
    const freq: Record<string, number> = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] in freq) {
            freq[str[i]] += 1;
        } else {
            freq[str[i]] = 1;
        }
    }

    let ans = "";

    const sortedKeys = Object.keys(freq).sort();

    sortedKeys.forEach((key) => {
        ans += `${key}:${freq[key]};`;
    });

    return ans;
}

function groupAnagrams(strs: string[]): string[][] {
    const ans: string[][] = [];
    const temp: Record<string, string[]> = {};

    strs.forEach((str) => {
        const key = makeKey(str);
        if (key in temp) {
            temp[key].push(str);
        } else {
            temp[key] = [str];
        }
    });

    // console.log(temp);

    return Object.keys(temp).map((key) => temp[key]);
}
