function uniqueOccurrences(arr: number[]): boolean {
  const freq: Record<string, number> = {};
  arr.forEach((x) => {
    if (x in freq) {
      freq[x]++;
    } else {
      freq[x] = 1;
    }
  });
  const set = new Set<number>();
  for (const key of Object.keys(freq)) {
    const val = freq[key];
    if (set.has(val)) {
      return false;
    }
    set.add(val);
  }
  return true;
}
