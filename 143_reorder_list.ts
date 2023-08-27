class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const reverseLL = (head: ListNode | null) => {
    let curr = head;
    let temp: ListNode | null = null;
    let prev: ListNode | null = null;

    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};

function printLL(head: ListNode | null) {
    let temp = head;
    const ans: number[] = [];
    while (temp) {
        ans.push(temp.val);
        temp = temp.next;
    }
    console.log(ans);
}

function copyLL(head: ListNode | null) {
    if (!head) return null;
    let ans: ListNode = new ListNode(head.val);
    let temp = ans;
    head = head.next;
    while (head) {
        ans.next = new ListNode(head.val);
        head = head.next;
        ans = ans.next;
    }
    return temp;
}

function listLength(head: ListNode | null) {
    let ans = 0;
    let curr = head;
    while (curr) {
        ans++;
        curr = curr.next;
    }
    return ans;
}

function reorderList(head: ListNode | null): void {
    if (!head) return;
    const n = listLength(head);
    let head1: ListNode | null = head;
    let head2 = reverseLL(copyLL(head));
    const ans: ListNode = new ListNode(head1.val);
    let count = 1;
    head1 = head1.next;

    while (count !== n) {
        if (count % 2 === 1) {
            head.next = new ListNode(head2!.val);
            head2 = head2!.next;
        } else {
            head.next = new ListNode(head1!.val);
            head1 = head1!.next;
        }
        head = head.next;
        count++;
    }
}
