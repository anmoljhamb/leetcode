**Problem Number**: 242
**Problem Difficulty**: #Easy
**Best Submission Link**: [Link](https://leetcode.com/problems/valid-anagram/submissions/1025531627/)
**Tags**: #Array #HashMap #String #Problem 

### Problem Statement

Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Sample Input and Output

**Input:** s = "anagram", t = "nagaram"
**Output:** true

### Various Approaches

#### Approach

Create a #HashMap, and then join all the frequencies, which would create the sample unique hash for all the anagrams of a given string.

### Code

```typescript
function makeKey(str: string): string {
    const temp = "a".charCodeAt(0);
    const count = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        count[str.charCodeAt(i) - temp] += 1;
    }
    return count.join("-");
}

function isAnagram(s: string, t: string): boolean {
    return makeKey(s) === makeKey(t);
}
```

![[Codes/242_valid_anagram.ts|242_valid_anagram]]