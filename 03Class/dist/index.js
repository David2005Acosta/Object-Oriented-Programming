"use strict";
// comandos:
// npm init -y
// npm install -D typescript
// npx tsc --init --target ES6 --module commonjs
// (descomentarear “rootDir” y “outDir”)
// (compilar): npx tsc
// npx tsc --watch
// node dist/[].js
// xd 
Object.defineProperty(exports, "__esModule", { value: true });
let mascota = {
    especie: "Gato",
    raza: "Naranja",
    tamanio: "Muy grande xd",
    peso: "obeso",
    edad: 2,
    patas: 4,
    colas: 1,
    orejas: 2,
    que: "so",
    mostrar() {
        console.log(`${mascota.especie} ${mascota.raza} ${mascota.tamanio}`);
        console.log(`
            edad: ${mascota.edad}
            patas: ${mascota.patas}
            colas: ${mascota.colas}
            orejas: ${mascota.orejas}
            `);
        console.log(`que ${mascota.que}`);
    }
};
mascota.mostrar();
//# sourceMappingURL=index.js.map