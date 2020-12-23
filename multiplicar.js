const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');

let data = "";

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }


        fs.writeFile(`tabla ${base}`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla ${base}.txt`);
            }
        });
    })
}

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }

        console.log('=================='.green);
        console.log(`tabla de ${ base }`.green);
        console.log('=================='.green);

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        resolve(data);
    })

}

module.exports = {
    crearArchivo,
    listarArchivo
}