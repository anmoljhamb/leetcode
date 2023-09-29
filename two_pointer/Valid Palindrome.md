**Problem Number**: 125
**Problem Difficulty**: #Easy
**Best Submission Link**: [Link](https://leetcode.com/problems/valid-palindrome/submissions/1026721569/)
**Tags**: #String #TwoPointer #Palindrome

### Problem Statement

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` *if it is a **palindrome**, or* `false` *otherwise*.

### Sample Input and Output

**Input:** s = "A man, a plan, a canal: Panama"
**Output:** true
**Explanation:** "amanaplanacanalpanama" is a palindrome.

### Various Approaches

#### Approach

**Time Complexity**: O(n)
Have a low pointer at 0, and the higher at length-1. Change both if the value is not alpha num, and then, we compare both. If they don't match, immediately exit the function and return false.

### Code

```typescript
const ord = (a: string): number => a.charCodeAt(0);

const isAlphaNum = (s: string) => {
    const temp = ord(s);
    return (
        (temp >= ord("0") && temp <= ord("9")) ||
        (temp >= ord("a") && temp <= ord("z")) ||
        (temp >= ord("A") && temp <= ord("Z"))
    );
};

function isPalindrome(s: string) {
    let low = 0,
        high = s.length - 1;

    while (low < high) {
        while (low < high && !isAlphaNum(s[low])) low++;
        while (low < high && !isAlphaNum(s[high])) high--;

        if (s[low].toLowerCase() !== s[high].toLowerCase()) return false;
        low++;
        high--;
    }

    return true;
}
```

![[Codes/125_valid_palin.ts|125_valid_palin]]