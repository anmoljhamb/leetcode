function lengthOfLongestSubstring(s: string): number {
  let left = 0,
    right = 0;

  let maxLength = 0;

  const set = new Set<string>();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
    } else {
      while (true) {
        if (s[left] === s[right]) {
          left++;
          break;
        }
        set.delete(s[left++]);
      }
      set.add(s[right]);
      right++;
    }
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
}
