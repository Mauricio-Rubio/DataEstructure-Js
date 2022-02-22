//1 -- > 2 -- > 3 -- > 4 -- > 5 -- > null

let singleLList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}

class nodo {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new nodo(value);
        this.tail = this.head;
        this.lenght = 1;
    }

    append(value){
        const newNodo = new nodo(value);
        this.tail.next = newNodo;
        this.tail = newNodo;
        this.lenght++;
        /*if(this.head.next == null){
            console.log("Condition passed");
            this.head.next = new nodo(value);
            this.lenght++;
        }*/
    }
}



let myLinkedList = new SinglyLinkedList(1);