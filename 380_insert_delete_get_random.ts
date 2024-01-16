class RandomizedSet {
  list: number[];
  map: Map<number, number>;
  constructor() {
    this.list = [];
    this.map = new Map();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val) as number;
    this.list[idx] = this.list[this.list.length - 1];
    this.map.set(this.list[idx], idx);
    this.list.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    const idx = Math.floor(Math.random() * this.list.length);
    return this.list[idx];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
