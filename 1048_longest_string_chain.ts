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
