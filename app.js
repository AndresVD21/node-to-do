const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/todo')

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log('========== TO-DO =========='.green);
        for (const tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Completado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No reconocido');
        break;
}