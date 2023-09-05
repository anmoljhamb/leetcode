class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    const dummy1 = new ListNode(0, list1);
    let prev: ListNode | null = dummy1;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            list1 = list1.next;
            prev = prev!.next;
        } else {
            let temp = list2.next;
            prev!.next = list2;
            list2.next = list1;
            list2 = temp;
            list1 = prev!.next;
        }
    }

    while (list2) {
        prev!.next = list2;
        prev = prev!.next;
        list2 = list2.next;
    }

    return dummy1.next;
}

function printLL(head: ListNode | null): void {
    let curr = head;
    const arr: number[] = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    console.log(arr);
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;

    while (lists.length > 1) {
        const temp: Array<ListNode | null> = [];
        for (let i = 0; i < lists.length; i += 2) {
            temp.push(
                mergeTwoLists(
                    lists[i],
                    i + 1 < lists.length ? lists[i + 1] : null
                )
            );
        }
        lists = temp;
    }

    return lists[0];
}
