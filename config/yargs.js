const opciones = {
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
    .command('listar', 'Imrpime en consola la tabla de multiplicar', opciones)
    .command('crear', 'crea el archivo de la tabla de multiplicar con un limite definido', opciones)
    .help()
    .help()
    .argv;

module.exports = {
    argv
}