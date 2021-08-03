const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

const list1 = {
  head: {
    value: 1,
    next: {
      value: 4,
      next: {
        value: 7,
        next: {
          value: 10,
          next: null,
        },
      },
    },
  },
};

const list2 = {
  head: {
    value: 3,
    next: {
      value: 5,
      next: {
        value: 6,
        next: {
          value: 12,
          next: null,
        },
      },
    },
  },
};

const reverseLinkedList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  let p = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

const printLinkedList = (list) => {
  let current = list;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const reversedList = reverseLinkedList(list.head);
printLinkedList(reversedList);

const mergeSortedLinkedLists = (list1, list2) => {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  if (list1.value < list2.value) {
    list1.next = mergeSortedLinkedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeSortedLinkedLists(list1, list2.next);
    return list2;
  }
};

const sortedList = mergeSortedLinkedLists(list1.head, list2.head);
printLinkedList(sortedList);
