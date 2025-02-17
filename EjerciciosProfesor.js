// Crea un arrelgo de objeto, en el cual se crea una funcion de recorrer y otra para operar

/* Solucion 1
//Arreglo Operaciones
const operacionMat = [
    {valor1: 1, operacion: "+", valor2: 3},
    {valor1: 2, operacion: "-", valor2: 8},
    {valor1: 5, operacion: "*", valor2: 9},
    {valor1: 49, operacion: "/", valor2: 7}
]
//Condicional y operacion Matematica
function condicionalOperacion(arreglo, operador){
    switch(operador){
        case "+":
            return "La operacion es: " + arreglo.valor1 + operador + arreglo.valor2 + "= " + (arreglo.valor1+arreglo.valor2) 
        case "-":
            return "La operacion es: " + arreglo.valor1 + operador + arreglo.valor2 + "= " + (arreglo.valor1-arreglo.valor2) 
        case "*":
            return "La operacion es: " + arreglo.valor1 + operador + arreglo.valor2 + "= " + (arreglo.valor1*arreglo.valor2) 
        case "/":
            return "La operacion es: " + arreglo.valor1 + operador + arreglo.valor2 + "= " + (arreglo.valor1/arreglo.valor2) 
    }
}
//Imprimir arreglo
function ImprimirArreglo(arreglo){
    for(let i = 0; i<arreglo.length;i++){
        const resulOperacion = condicionalOperacion(arreglo[i], arreglo[i].operacion);
        console.log(resulOperacion)
    }
}

ImprimirArreglo(operacionMat)
*/ 

/* Solucion 2
const operacionMat = [
    {valor1: 1, operacion: "+", valor2: 3},
    {valor1: 2, operacion: "-", valor2: 8},
    {valor1: 5, operacion: "*", valor2: 9},
    {valor1: 49, operacion: "/", valor2: 7}
]

function realizarOperacion (valor1, operacion, valor2){
    let resultado;
    switch(operacion){
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
    }
    return resultado;
}

function obtenerResultados(arreglo){
    let resultado = 0;
    for (let i = 0; i<arreglo.length; i++){
        resultado = realizarOperacion(arreglo[i].valor1, arreglo[i].operacion, arreglo[i].valor2)
        console.log(`${arreglo[i].valor1} ${arreglo[i].operacion} ${arreglo[i].valor2} = ${resultado}`)
    }
}

obtenerResultados(operacionMat)
*/

/* Solucion 3
const matematica = [
    { operacion: "+", valor1: 20, valor2: 85 },
    { operacion: "-", valor1: 62, valor2: 57 },
    { operacion: "*", valor1: 2, valor2: 61 },
    { operacion: "/", valor1: 82, valor2: 2 }
];

function condicionalOperacion(arreglo, operacion){
    switch(operacion){
        case "+":
            return `${arreglo.valor1} + ${arreglo.valor2} = ${arreglo.valor1 + arreglo.valor2}`;
        case "-":
            return `${arreglo.valor1} - ${arreglo.valor2} = ${arreglo.valor1 - arreglo.valor2}`;
        case "*":
            return `${arreglo.valor1} * ${arreglo.valor2} = ${arreglo.valor1 * arreglo.valor2}`;
        case "/":
            return `${arreglo.valor1} / ${arreglo.valor2} = ${arreglo.valor1 / arreglo.valor2}`;          
    }
}

matematica.forEach(element => {
    console.log(condicionalOperacion(element,element.operacion))
});

*/