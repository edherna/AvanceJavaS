alert("Hola") 
//para activar una alerta en la pagina
console.log("hola mundo")
//para imprimir un archivo
prompt();
//para ingresar un texto en la ventana

//es un lenguaje interpretado, necesitamos de un interprete
//se necesita un copilador, si tenemos un error en una linea podria decir donde esta el error
//es un lenguaje tipado, una variable tiene o no un tip, tienen un tipo 
//int edad = 24  
//let edad = 24

// VARIABLES /////////////////////////////////////////////////////////////
let nombre = "Eddison";
var nombre2 = "Eddison"
const PI = 3.1416;
//son distintos tipos de datos

let a = "cadena";
a = 23;
a = 2.2;

//podemos obtener cosas de la libreria 
Math.PI
//y podemos elevar numeros 
Math.pow(10, 2)

Math.pow(10, 3)

//redondear decimales 
Math.round(6.5)

//raiz de un numero
Math.sqrt(4)

//BULEANOS

let booleano = new Boolean(1);
console.log(booleano.toString());

//OPERADORES  ///////////////////////////////////////////////////
let edad = 24;
//undefined
edad == 24;
//true
edad == 20;
//false

edad != 18;
//ture 

//podemos comparar con ><
//tambien >= o <= 

//OPERADORES LOGICOS 
//podemos usand and que es &&
24 == 24 && "hola"== "hola"// hacen una igualdad y buscan que sean verdaderos 

//tambien podemos usar or que es ||
24 == 24 || 23 === "13"

!true; 
//flse 
!false;
//true 

//!(24 == 24) || 10 == asjds
//error

//CONDICIONES  ///////////////////////////////////////////////

//USANDO IF
if (5 == "5" && 10 > 2) console.log("conicion cumplida;")
//if (expresion booleana)

//si fueran varias instrcciones tenemos que usar llaves 
if (5 == "5" && 10 > 2){
    console.log("conicion cumplida;");
    console.log("conicion cumplida2;");
}

//USANDO ELSE
let edad4 = 10;
if (edad4 > 18){
    console.log("eres mayor de edad");
}else{
    console.log("no eres mayor de edad");
}

//USANDO ELSEIF 

let calificacion = 1;

if (calificacion == 10){
    console.log("ecxelente");
}else if(calificacion > 7){
    console.log("muy bien");
}else if(calificacion > 5){
    console.log("puedes mejorar");
}else{
    console.log("reprobado");
}

//CICLOS ////////////////////////////////////////////////////

for(let i = 1; i <= 10;i++){
    console.log(i)
}
// USANDO BREAK 
for(let i = 1; i <= 10;i++){
    if (i <= 5) break;
    console.log(i)
}
  
//USANDO CONTUNUE 
for(let i = 1; i <= 10;i++){
    if (i % 2==0) continue; 
    console.log(i)
}
  
//USANDO WHILE /////////////////////////////////////////

//while (< expresion booleana>){}
let iu = 1;
while (iu <= 10){
    iu ++;
    console.log(iu);
}

//DO WHILE 
let iue = 1;
do{
    iue++;
    console.log(iue);
}while(iue<= 10)


//UNDEFINED /////////////

//typeof//
//es una funcion que nos ayuda a saber que tipo de dato es el error



































