function findWordsContaining(words: string[], x: string): number[] {
    const ans: number[] = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(x) !== -1) {
            ans.push(i);
        }
    }

    return ans;
}
