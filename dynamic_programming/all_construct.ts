const allConstruct = (
    target: string,
    wordBank: string[],
    memo: Record<string, string[][]> = {}
): string[][] | null => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    let results: string[][] = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const remainder = target.slice(word.length);
            let currResult = allConstruct(remainder, wordBank, memo);

            if (currResult !== null) {
                for (let i = 0; i < currResult.length; i++) {
                    currResult[i] = [word, ...currResult[i]];
                }
                results = [...results, ...currResult];
            }
        }
    }

    memo[target] = results;
    return results;
};

console.log(allConstruct("lala", ["l", "a", "la"]));
console.log(
    allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
    ])
);
console.log(
    allConstruct("abcdef", ["abc", "ab", "cd", "def", "abcd", "ef", "c"])
);
