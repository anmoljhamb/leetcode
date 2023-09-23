function longestStrChain(words: string[]) {
    words.sort((a, b) => a.length - b.length);
    const dp: Record<string, number> = {};
    let ans = 0;
    for (const word of words) {
        let longest = 0;
        for (let i = 0; i < word.length; i++) {
            const sub = word.slice(0, i) + word.slice(i + 1);
            if (sub in dp) longest = Math.max(dp[sub] + 1, longest);
            else longest = Math.max(1, longest);
        }
        dp[word] = longest;
        ans = Math.max(ans, dp[word]);
    }
    return ans;
}

console.log(
    longestStrChain([
        "kxbvnw",
        "uqjszp",
        "pmukt",
        "aai",
        "aaicwm",
        "mhkzelhyek",
        "cjv",
        "v",
        "uqjjspzpp",
        "aaim",
        "uqjjszp",
        "uqjjspzppd",
        "uqjjspzp",
        "aaicm",
        "pukt",
        "pvmukt",
        "dgdb",
        "aaicwbm",
        "mhkelhyek",
        "jv",
    ])
);
// console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));
// console.log(longestStrChain(["abcd", "dbqca"]));
