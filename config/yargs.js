const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('Listar', 'Imprime en consola tabla de multiplicar', opts)
    .command('crear', 'Creaando un archivo de texto', opts)
    .help()
    .argv;

module.exports = {
    argv
}