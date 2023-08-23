class TimeMap {
    data: {
        [key: string]: { value: string; timestamp: number }[];
    };

    constructor() {
        this.data = {};
    }

    set(key: string, value: string, timestamp: number): void {
        if (key in this.data) {
            this.data[key].push({ value, timestamp });
        } else {
            this.data[key] = [{ value, timestamp }];
        }
    }

    get(key: string, timestamp: number): string {
        if (!(key in this.data)) return "";

        const arr = this.data[key];

        let low = 0,
            high = arr.length - 1;
        let mid = 0;
        let res = "";

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            if (arr[mid].timestamp <= timestamp) {
                res = arr[mid].value;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
