class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function merge(
    lists: Array<ListNode | null>,
    low: number,
    high: number,
    ans: ListNode | null
) {
    if (low <= high) {
        return;
    }
    const mid = Math.floor((low + high) / 2);

    merge(lists, low, mid, ans);
    merge(lists, mid + 1, high, ans);
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const dummy = new ListNode();
    merge(lists, 0, lists.length - 1, dummy);
    return dummy.next;
}
