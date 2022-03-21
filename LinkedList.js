/*
*This is how a singly linked list looks
let singleLList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: 
                }
            }
        }
    }
}*/

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

  append(value) {
    const newNodo = new nodo(value);
    this.tail.next = newNodo;
    this.tail = newNodo;
    this.lenght++;
    return this;
  }

  prepend(value) {
    const newNodo = new nodo(value);
    newNodo.next = this.head;
    this.head = newNodo;
    this.lenght++;
    return this;
  }

  insert(value, index) {
    if (index <= 0) {
      return this.prepend(value);
    } else if (index >= this.lenght) {
      return this.append(value);
    }
    const newNodo = new nodo(value);
    const leftNodo = this.getIndex(index - 1);
    const rightNodo = leftNodo.next;
    leftNodo.next = newNodo;
    newNodo.next = rightNodo;
    this.lenght++;
    return this;
  }

  getIndex(index) {
    let cont = 0;
    let selectorNodo = this.head;
    while (cont != index) {
      selectorNodo = selectorNodo.next;
      cont++;
    }
    return selectorNodo;
  }

  delete(value) {
    let indexValueNodo = this.search(value);
    console.log(indexValueNodo);
    if (indexValueNodo == 0) {
      const auxNodo = this.head.next;
      this.head = auxNodo;
      this.lenght--;
      return this;
    }
    if (indexValueNodo + 1 == this.lenght) {
      this.pop();
      return this;
    }
    const leftNodo = this.getIndex(indexValueNodo - 1);
    const rightNodo = this.getIndex(indexValueNodo + 1);
    leftNodo.next = rightNodo;
    this.lenght--;
    return this;
  }
  pop() {
    let cont = 0;
    let selectorNodo = this.head;
    while (cont != this.lenght - 2) {
      selectorNodo = selectorNodo.next;
      cont++;
    }
    selectorNodo.next = null;
    this.tail = selectorNodo;
    this.lenght--;
    return this;
  }

  shift(){
      if(this.lenght == 1){
          this.head = this.tail = null;
          this.lenght--;
          return this
      }
      const auxNodo = this.head.next;
      this.head = auxNodo;
      this.lenght--;
      return this;
  }
  search(value) {
    let cont = 0;
    let selectorNodo = this.head;
    while (selectorNodo.value != value) {
      selectorNodo = selectorNodo.next;
      cont++;
    }
    return cont;
  }
}

let myLinkedList = new SinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);

/*makeList.prototype.toString = function singleLinkedListtoString(){
    return ''+this.SinglyLinkedList.head;
}
console.log(myLinkedList.toString);*/
