class Poo {
    codigo: string;
    nombre: string;
    edad: number;
    laboratorio: number;
    parcial: number;

    constructor(_codigo: string, _nombre: string, _edad: number, _laboratorio: number, _parcial: number) {
        this.codigo = _codigo;
        this.nombre = _nombre;
        this.edad = _edad;
        this.laboratorio = _laboratorio;
        this.parcial = _parcial;
    }
    public mostrarDatos(): void {
        console.log(`
                El estudiante: ${this.nombre}
                Código: ${this.codigo}
                Tiene las siguientes notas:
                Laboratorio: ${this.laboratorio}
                Parcial: ${this.parcial}`)
    }
    public mostrarNotas(): void {
        console.log(`
                El estudiante tiene las siguientes notas:
                Laboratorio: ${this.laboratorio}
                Parcial: ${this.parcial}`)
    }
}

class Redes {
    nombre: string;
    L1: number;
    L2: number;
    L3: number;
    P1: number;
    P2: number;
    P3: number;

    constructor(nombre: string, l1: number, l2: number, l3: number, p1: number, p2: number, p3: number) {
        this.nombre = nombre;
        this.L1 = l1;
        this.L2 = l2;
        this.L3 = l3;
        this.P1 = p1;
        this.P2 = p2;
        this.P3 = p3;
    }
    public mostrarNota(): void {
        let computo1 = ((this.L1 * 0.60) + (this.P1 * 0.40)) / 3;
        let computo2 = ((this.L2 * 0.60) + (this.P2 * 0.40)) / 3;
        let computo3 = ((this.L3 * 0.60) + (this.P3 * 0.40)) / 3;
        let notaFinl = computo1 + computo2 + computo3 / 3

        console.log(`
            Las notas del estudiante ${this.nombre} son:
            Laboratorio 1: ${this.L1}
            Laboratorio 2: ${this.L2}
            Laboratorio 3: ${this.L3}
            Parcial 1: ${this.P1}
            Parcial 2: ${this.P2}
            Parcial 3: ${this.P3}
            
            Nota Final: ${notaFinl}`)
    }
}

//objeto instanciado a POO 
let estudiante1 = new Poo('U20241606', 'Yonathan', 21, 10, 11);
// estudiante1.mostrarDatos();
// estudiante1.mostrarNotas();
//objeto instanciado a Redes
let estudiante2 = new Redes("Yonathan", 10, 8, 8, 10, 9, 7);
estudiante2.mostrarNota();