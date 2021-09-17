var Eddison="Hola mundo"
console.log(Eddison)


// como usar una funcion 
function saluda (){
    console.log("hola  Edd")
}
saluda();

// cuadrado del numero
function cuadrado (numero){
    return numero * numero;
}
let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);

//funcion cuadrada 

function cuadrado (numero){
    return numero * numero;
}
let cuadrado_de_dos = (cuadrado(4));
console.log(cuadrado_de_dos);

// QUE ES SCOPE ///////////////////////////////////////////////
//es una coleccion de variables, funciones y objetos al alcance en el objeto
//todo aquello que definimos fuera del cuerpo de una funcion
//

let nombre2 = "eddison"
//es global y esta disponible en cualquier parte del codigo 

//LOCAL SCOPE///////////////////////////////////////////////////
//se puede encontrar cuando estan dentro de la funcion 

var nombre3 = "eddison";

function switch_nombres(){
    var nombre3 = "wilson";
    console.log(nombre3);
}

switch_nombres();
console.log(nombre3)

// CUANDO USAR LET Y VAR 

function mayor_de_edad (edad){
    if (edad >= 18){
        var resultado = "eres mayor de edad";
    }else{
        var resultado = "eres menor de edad"
    }
    console.log(resultado);
}

mayor_de_edad();

// ARGUMENTOS Y FUNCIONES 
function cuadrado2(numero){
    return numero * numero 
}

console.log(cuadrado2(2));

// un parametro que tiene que ser llenado cuando una funcion se manda a llamar
//los argumentos son los que se mandan a llamar o llenan los parametrs

function cuadrado2(numero=0){ //cuando no hay un argumento se le debe asignar uno en la funcion
    return numero * numero 
}

console.log(cuadrado2());//notese que aca no hay un argumento que llene al parametro 


//sumartodos
function sumaTodos(){
    return arguments[0] + arguments[1];
}
console.log(sumaTodos(1,2,3,4,5,6))

//aca el arreglo recibe un parametro 

//FUNCIONES ANONIMAS/////////////////////////////////////////////////
// asi se veria normalmente 
function executor(funcion){
    funcion();
}

function decirHola(){
    console.log("hola");
}

executor(decirHola);

//esta es una anonima 
function executor(funcion){
    funcion();
}

function decirHola(){
    console.log("hola");
}

executor(function(){
    console.log("hola");
});


console.log("Hola mundo")










