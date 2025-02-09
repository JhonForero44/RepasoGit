/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

/* 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -1

if (numero > 0){
    console.log("El numero es positivo")
} else if ( numero < 0){
    console.log("El numero es negativo")
} else {
    console.log("El numero es Cero")
}
*/

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
function edadPersona(edad){
    if (edad >= 18){
        return "La persona ya puede votar";
    } else {
        let edadFaltante = 18 - edad;
        return "La persona no puede votar, le falta " + edadFaltante + " años";
    }
}

console.log(edadPersona(16))

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7