const colors = require('colors');
const fs = require('fs');


let listarTabla = (base, limite) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index}  = ${base*index}`.blue);
    };
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
            console.log(`El achivo tabla-${base}-al-${limite}.txt ha sido creado`.green);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}