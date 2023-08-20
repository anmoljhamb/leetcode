const isOpening = (s: string) => {
    return s === "{" || s === "[" || s === "(";
};

const isClosing = (s: string) => {
    return s === "}" || s === "]" || s === ")";
};

const isMatching = (s1: string | undefined, s2: string) => {
    return (
        (s1 === "{" && s2 === "}") ||
        (s1 === "[" && s2 === "]") ||
        (s1 === "(" && s2 === ")")
    );
};

function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (isOpening(s[i])) {
            stack.push(s[i]);
            continue;
        }
        if (!isMatching(stack.pop(), s[i])) {
            return false;
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}
