class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

   
    AddValue(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    removeFirstMultipleOf5() {
        if (!this.head) 
        return;

        if (this.head.value % 5 === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value % 5 !== 0) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

   
    insert44Before7() {
        let current = this.head;
        let prev = null;

        while (current) {
            if (current.value % 7 === 0) {
                const newNode = new ListNode(44);
                if (prev) {
                    prev.next = newNode;
                } else {
                    this.head = newNode;
                }
                newNode.next = current;
            }
            prev = current;
            current = current.next;
        }
    }

   
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " ; ";
            current = current.next;
        }
        console.log(result);
    }
}


const list = new SinglyLinkedList();
list.AddValue(10);
list.AddValue(21);
list.AddValue(35);
list.AddValue(42);
list.AddValue(14);
list.print(); 

list.removeFirstMultipleOf5();
list.print(); 

list.insert44Before7();
