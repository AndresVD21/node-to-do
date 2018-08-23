const descripcion = {
    alias: 'd',
    description: 'Descripcion de la tarea por hacer',
    demand: true
}

const completado = {
    alias: 'c',
    default: true,
    description: 'Marca como completada o pendiente una tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea a completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea de la lista de tareas por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}