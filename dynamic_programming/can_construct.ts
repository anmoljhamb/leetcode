const isPrefix = (bigger: string, smaller: string) => {
    return bigger.slice(0, smaller.length) === smaller;
};

const can_construct = (
    target: string,
    wordBank: string[],
    memo: Record<string, boolean> = {}
): boolean => {
    if (target in memo) return memo[target];

    if (target === "") return true;

    for (let word of wordBank) {
        if (isPrefix(target, word)) {
            const result = can_construct(
                target.slice(word.length),
                wordBank,
                memo
            );

            if (result) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
};

console.log(
    can_construct(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddasdsadasdasdsadsadasdsadsadasdsadasdsadsadsadasdas",
        ["ab", "abc", "cd", "def", "abcd"]
    )
);
console.log(can_construct("abcabcabd", ["ab", "abc", "cd", "def", "abcd"]));
console.log(can_construct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
    can_construct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
