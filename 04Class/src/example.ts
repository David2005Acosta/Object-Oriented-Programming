//Una clase:
// class Animal{
// }


class Animal {
    nombre: string;
    edadAnimal: number;
    raza: string;
    
    constructor(nombre: string, edadAnimal: number, raza: string) {
        this.nombre = nombre;
        this.edadAnimal = edadAnimal;
        this.raza = raza;
    }

    public accion1(): void {
        console.log(`El perro tiene el nombre de: ${this.nombre}`)
    }
}
let perro = new Animal("Kaizer", 2, "pitbull")
perro.accion1();