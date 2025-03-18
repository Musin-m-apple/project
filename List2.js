class DoublyListNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    printList() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
            if (current === this.head) break; // зупиняємося, якщо повернулися до голови
        }
        console.log(values.join(' <-> '));
    }

    splitIntoCircular() {
        if (!this.head || !this.head.next) return null; 

        let mid = this.head;
        let current = this.head;
        let count = 0;

        // Знайти середину списку
        while (current) {
            count++;
            if (count % 2 === 0) {
                mid = mid.next;
            }
            current = current.next;
        }

        const listA = new DoublyLinkedList();
        let currentA = this.head;
        while (currentA !== mid) {
            listA.add(currentA.value);
            currentA = currentA.next;
        }
        listA.tail.next = listA.head;
        listA.head.prev = listA.tail;

        const listB = new DoublyLinkedList();
        let currentB = mid;
        while (currentB) {
            listB.add(currentB.value);
            currentB = currentB.next;
        }
        listB.tail.next = listB.head;
        listB.head.prev = listB.tail;

        return { listA, listB };
    }
}

const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);

console.log("Початковий двозв'язний список:");
list.printList();

const { listA, listB } = list.splitIntoCircular();
console.log("Перший циклічний двозв'язний список:");
listA.printList();
console.log("Другий циклічний двозв'язний список:");
listB.printList();
