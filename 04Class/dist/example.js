"use strict";
//Una clase:
// class Animal{
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nombre, edadAnimal, raza) {
        this.nombre = nombre;
        this.edadAnimal = edadAnimal;
        this.raza = raza;
    }
    accion1() {
        console.log(`El perro tiene el nombre de: ${this.nombre}`);
    }
}
let perro = new Animal("Kaizer", 2, "pitbull");
perro.accion1();
//# sourceMappingURL=example.js.map