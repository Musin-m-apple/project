class Queue {
    constructor() {
        this.items = [];
    }

    AddToQueue(item) {
        this.items.push(item);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    DeleteFromQueue() {
        if (this.isEmpty()) {
            console.log("Черга порожня");
            return;
        }
        return this.items.shift();
    }

    ClearQueue() {
        if (this.isEmpty()) {
            console.log("Черга порожня");
        } else {
            this.items = [];
        }
    }

    ShowQueue() {
        console.log(`Черга містить ${this.items.length} елементів: ${this.items.join(', ')}`);
    }

    getMin() {
        if (this.isEmpty()) {
            console.log("Черга порожня");
            return null; 
        }
        return Math.min(...this.items); 
    }
}

// Створення об'єкта черги
const queue = new Queue();
queue.AddToQueue(3);
queue.AddToQueue(1);
queue.AddToQueue(2);
queue.ShowQueue(); 

const minElement = queue.getMin(); 
console.log(`Мінімальний елемент черги: ${minElement}`);
