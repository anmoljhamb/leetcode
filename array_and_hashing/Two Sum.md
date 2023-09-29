**Problem Number**: 1
**Problem Difficulty**: #Easy
**Best Submission Link**: [Link](https://leetcode.com/problems/two-sum/submissions/1024476426/)
**Tags**: #Array #HashMap 

### Problem Statement

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

### Sample Input and Output

**Input:** nums = [2,7,11,15], target = 9
**Output:** [0,1]
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

### Various Approaches

#### Approach

**Time Complexity**:  O(n)
Create a HashMap to store all the values, and loop through a given array and then we can check if the remaining target is present or not.

### Code

```typescript
function twoSum(nums: number[], target: number): number[] {
    const dict = new Map<number, number>();
    // const dict: Dict = {};
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let y = target - x;
        if (dict.has(y)) {
            return [dict.get(y)!, i];
        }
        if (!dict.has(x)) {
            dict.set(x, i);
        }
    }

    return result;
}
```

![[../001_two_sums.cpp|001_two_sums]]

