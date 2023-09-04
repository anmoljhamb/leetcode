class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const ans = new ListNode();
    let curr = ans;
    let carry = false;

    while (l1 !== null && l2 !== null) {
        let temp = l1.val + l2.val;
        if (carry) {
            temp += 1;
        }
        carry = temp >= 10;
        curr.val = temp % 10;
        if (l1.next !== null && l2.next !== null) {
            curr.next = new ListNode();
            curr = curr.next;
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1 !== null) {
        let temp = l1.val;
        if (carry) temp += 1;
        carry = temp >= 10;
        curr.next = new ListNode(temp % 10);
        curr = curr.next;
        l1 = l1.next;
    }

    while (l2 !== null) {
        let temp = l2.val;
        if (carry) temp += 1;
        carry = temp >= 10;
        curr.next = new ListNode(temp % 10);
        curr = curr.next;
        l2 = l2.next;
    }

    if (carry) {
        curr.next = new ListNode(1);
    }

    return ans;
}
