class MinStack {
    arr: number[];
    min: number;
    constructor() {
        this.arr = [];
        this.min = Infinity;
    }

    push(val: number): void {
        this.arr.push(val);
        this.min = Math.min(this.min, val);
    }

    pop(): void {
        const temp = this.arr.pop();
        if (this.min === temp)
            this.min = this.arr.reduce(
                (curr, val) => Math.min(curr, val),
                Infinity
            );
    }

    top(): number {
        return this.arr[this.arr.length - 1];
    }

    getMin(): number {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
