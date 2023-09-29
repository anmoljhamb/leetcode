**Problem Number**: 217
**Problem Difficulty**: #Easy
**Best Submission Link**: [Link](https://leetcode.com/problems/contains-duplicate/submissions/1025511856/)
**Tags**: #Array #Set

### Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

### Sample Input and Output

**Input:** nums = [1,2,3,1]
**Output:** true

### Various Approaches

#### Approach 1

Create a #HashMap and whenever we're about to increase a value, just check if we have done so already or not

#### Approach 2

Create a set and use that to check if the set already contains the given element or not. If found, return false

### Code

```typescript
function containsDuplicate(arr: number[]): boolean {
    const set = new Set<number>();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return true;
        }
        set.add(arr[i]);
    }
    return false;
}
```

![[Codes/217_duplicate.ts]]
