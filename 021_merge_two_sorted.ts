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
