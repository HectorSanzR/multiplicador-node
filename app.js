const {crearArchivoTabla}  = require( './helpers/multiplicar')
const {argv} = require('./config/yargs.js')


console.clear();

crearArchivoTabla(argv.b,argv.l,argv.h)
        .then( nombreArchivo => nombreArchivo,'Creado')
        .catch(err => console.log(err));








