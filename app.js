const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarArchivo } = require('./multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        console.log('listar');
        //console.log(argv.limite);
        listarArchivo(argv.base, argv.limite)
            .then(data => console.log(`Listando:  \n${data}`))
            .catch(err => console.log(err));

        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}


//console.log(argv.base);
//console.log('limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1];


/*
crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
    .catch(err => console.log(err));
*/