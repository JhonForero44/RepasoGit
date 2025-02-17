const estudiantes = [
    { nombre: "Juan", edad: 20, calificacion: 85 },
    { nombre: "Maria", edad: 22, calificacion: 90 },
    { nombre: "Pedro", edad: 21, calificacion: 78 },
    { nombre: "Ana", edad: 23, calificacion: 95 },
    { nombre: "Luis", edad: 19, calificacion: 88 }
];

//Filtrar informacion
/*
const mayor = estudiantes.filter( estudiante => estudiante.edad > 20)
function mayoresEdad (arreglos){
    return arreglos.filter( arreglo => arreglo.edad > 20)
}
console.log(mayoresEdad(estudiantes))
*/

//Verificar si un elemento cumple con la funcion
/*
const tieneCalificacionAlta = estudiantes.some(estudiante => 
    estudiante.calificacion > 90
);
console.log(tieneCalificacionAlta)
*/

//Reducir el arreglo a un solo valor
/*
const totalCalificaciones = estudiantes.reduce((acumulador, estudiante) => {
    return acumulador + estudiante.calificacion;
}, 0); // Comienza en 0
console.log(totalCalificaciones); 
*/

//Ordenar por calificación de mayor a menor
/*
const estudiantesOrdenados = estudiantes.sort(
    (a, b) => b.calificacion - a.calificacion
    );
console.log(estudiantesOrdenados);
*/

//Modificar la calificacion de Pedro
/*
const estudiantesModificados = estudiantes.map(estudiante => {
    if (estudiante.nombre === "Pedro") {
        estudiante.calificacion = 80; // Modificamos la calificación
    }
    return estudiante;
});
console.log(estudiantesModificados);
*/