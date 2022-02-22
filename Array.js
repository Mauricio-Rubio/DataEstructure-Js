class MyArr {

    constructor() {
        this.lenght = 0;
        this.data = {};
    }
    //Obetene cierto elemento
    get(index) {
        return this.data[index];
    }
    //Elemento al final del arreglo
    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;
        return this.data;
    }
    //Borrar ultimo elemento
    pop() {
        const lastitem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1]
        this.lenght--;
        return lastitem;
    }
    //Borrar el elemento deseado
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item
    }
    //Metodo para correr los objetos una posicion atras
    //Cuando borramos elementos
    shiftIndex(index) {
        //Corriendo 1 elemento atras desde el index
        for (let i = index; i < this.lenght - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        //Borrando el elemento
        delete this.data[this.lenght - 1];
        //Arreglando
        this.lenght--;
    }
    //Agregar un elemento al inicio del arreglo
    unshift(item) {
        let aux = this.data[0];
        for (let i = 0; i < this.lenght; i++) {
            let temp = this.data[i + 1];
            this.data[i + 1] = aux;
            aux = temp;
        }
        this.data[0] = item;
        this.lenght++;
        return this.lenght;
    }
    //Borrar el primer elemento del arreglo
    shift() {
        const item = this.data[0];
        this.shiftIndex(0);
        return item;
    }
    indexOff(item) {
        for (let i = 0; i < this.lenght; i++) {
            if (item === this.data[i]) {
                return i;
            }
        }
    }
}
const arreglo = new MyArr();