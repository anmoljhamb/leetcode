class MinStack {
    arr: number[];
    min: number[];
    constructor() {
        this.arr = [];
        this.min = [];
    }

    push(val: number): void {
        this.arr.push(val);
        if (this.min.length === 0) {
            this.min.push(val);
        } else {
            this.min.push(Math.min(val, this.getMin()));
        }
    }

    pop(): void {
        this.arr.pop();
        this.min.pop();
    }

    top(): number {
        return this.arr[this.arr.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}
