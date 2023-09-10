const count_construct = (
    target: string,
    wordBank: string[],
    memo: Record<string, number> = {}
): number => {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let count = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            count += count_construct(target.slice(word.length), wordBank, memo);
        }
    }

    memo[target] = count;
    return count;
};

console.log(count_construct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(count_construct("lalal", ["l", "a", "la"]));
console.log(
    count_construct(
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff",
        ["e", "ee", "eee", "eeeee"]
    )
);
