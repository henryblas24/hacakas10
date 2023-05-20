// PREGUNTA 1 :
// Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
// Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no 
// es divisible entre 2”

/*let num = prompt("Ingrese un numero")

function divisible(num){
    if(num %2 === 0){
        console.log(`El numero ${num} es divisible entre 2`)
    }else{
        console.log(`El numero ${num} no es divisible entre 2`)
    }
}
divisible(num)*/



// PREGUNTA 2 :
// Crear un programa que determine si un número introducido en un Prompt es par 
// o no, la respuesta será mostrada en un Alert.

/* let numero = prompt("Ingrese un numero")

function divisible(numero){
    if(numero %2 === 0){
        alert("Es par")
    }else{
        alert("No es par")
    }
}
divisible(numero);*/


// PREGUNTA 3 :
// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
// No considerar el caso en que ambos números son iguales.

/*let num1 = prompt("Ingrese un numero")
let num2 = prompt("Ingrese otro numero")

let numeros = (num1,num2) =>{
    if (num1>num2){
        return console.log(`El numero ${num1} es mayor que ${num2}`)
    }else if(num2 >num1){
        return console.log(`El numero ${num2} es mayor que ${num1}`)
    }else if(num1===num2){
        return console.log(`Los numeros ${num1} y ${num2} son iguales`)
    } 
}

numeros(num1,num2);*/

// PREGUNTA 4 :
// Solicitar al usuario que ingrese 3 números y mostrar cuál de los 3 es mayor. 
// considerar el caso en que ambos números son iguales.


/*let num1 = prompt("Ingrese numero 1 :") ;
let num2 = prompt("Ingrese numero 2 :") ;
let num3 = prompt("Ingrese numero 3 :") ;

let numeros=(num1,num2,num3) => {

    if  (num1>num2  &&  num1>num3) {
            console.log('el numero mayor es ' + num1);}
    if (num2>num1  &&  num2>num3) {
            console.log('El numero mayor es ' + num2);}
    if  (num3>num1 &&  num3>num2) {
            console.log('El numero mayor es ' + num3 );}
    if  (num1===num2 && num1===num3 && num2===num3) {
            console.log('los numeros '+ num1 + ' '+ num2 + ' '+ num3 +' son iguales') ;}
    };

numeros(num1,num2,num3);*/

// PREGUNTA  5 :
// Requerir al usuario que ingrese un dia de la semana e imprimir un mensaje
// si es lunes, otro mensaje diferente si el viernes, otro mensaje si es sabado
// o domingo.Si el dia ingresado no es ninguno de esos , imprimir otro mensaje.

/*let dia = prompt ('ingrese un dia de la semana');
let resul = dia.toUpperCase();

switch  (resul) {
      case "LUNES" :
        console.log ('hoy es Lunes');
        break;
      case "MARTES" :
        console.log ('hoy es Martes');
        break;
      case "MIERCOLES" :
        console.log ('hoy es Miercoles');
        break;
      case "JUEVES" :
        console.log ('hoy es Jueves');
        break;
      case "VIERNES" :
        console.log ('hoy es Viernes');
        break;
      case "SABADO" :
        console.log ('hoy es Sabado');
        break;
      case "DOMINGO" :
        console.log ('hoy es Domingo');
        break;
      default :
        console.log ('No es un dia de la semana');
        break;
 };*/


// PREGUNTA  6 :
// Crea un programa que pregunte al usuario un numero.Mostrar los numeros que son
// multiplos de 5 desde 1 hasta el numero introducido por el usuario

/*let numero = prompt ('ingrese un numero');

let  multiploscinco = (numero) => {
    console.log('el numero '+ numero + ' es multiplo de 5');
 };

multiploscinco(numero);*/
  


// PREGUNTA  7 :
// Crea un programa que solioite al usuario 2 entre el 1 y 50.Posteriormente 
// mostrar en consola los numeros del 1 hasta 50, pero añadir el mensaje
// "!Loteria¡", solo al mostrar los numeros indicados por el usuario.

/*let numero1 = prompt ('ingrese un primer numero');
let numero2 = prompt ('ingrese un segundo numero');

let  Loteria = (numero1,numero2) => {
    if ( numero1>=1 && numero2<=50 ) {
        console.log(numero1 + numero2);
        console.log("Loteria");
    }
 };

Loteria(numero1,numero2);*/
  

// PREGUNTA  8 :
// Crea un programa que solioite al usuario numeros,si lo que introduce es un numero 
// guardarlo en un arreglo.Para terminar de pregunatar al usuario debe ingresar el numero 0.
// Finalmente mostrar la lista de numeros capturados en la pantalla o consola.

/*let numero;
let arrayNum = [];
do {
    numero = parseInt(prompt('Ingrese varios numeros hasta que sea 0 para terminar'));
    arrayNum.push(numero);
    } while (numero > 0 )
 arrayNum.pop();
 console.log(arrayNum);*/
   

// PREGUNTA  9 :
// Crea un programa que solioite al usuario letras,si es asi guardar el resultado 
// Para terminar de preguntar al usuario no debe escribir valor alguno.
// Al terminar de capturar,mostrar en pantalla la concatenacion de todas las
// palabras capturadas.

/*let letras;
let arrayLetras = [];
let arrayconca = "";
do {
    letras = prompt('Ingrese varias letras o palabras hasta que presione aceptar para terminar');
    arrayLetras.push(letras);
    arrayconca=arrayconca+letras;
    } while (letras)
 arrayLetras.pop();
 console.log(arrayLetras);
 console.log(arrayconca);*/


// PREGUNTA  10 :
// Crea un programa que solioite al usuario letras,si es asi guardar el resultado 
// Para terminar de preguntar al usuario no debe escribir valor alguno.
// Al terminar de capturar,mostrar en pantalla la concatenacion de todas las
// palabras capturadas.

/*let dia = "";
let resul = "";
do { 
    
    dia = prompt('Ingrese un dia de la semana');
    resul = dia.toUpperCase();

    switch  (resul) {
        case "LUNES" :
           alert ('Hoy es Lunes');
          break;
        case "MARTES" :
          alert ('Hoy es Martes');
          break;
        case "MIERCOLES" :
          alert ('Hoy es Miercoles');
          break;
        case "JUEVES" :
          alert ('Hoy es Jueves');
          break;
        case "VIERNES" :
           alert ('Hoy es Viernes');
          break;
        case "SABADO" :
          alert ('Hoy es Sabado');
          break;
        case "DOMINGO" :
          alert ('ve a Descansar');
          break;
    };
} while (resul !="" );*/


// PREGUNTA  11 :
// solioitar al usuario una calificaxcion entre 1 y 10 luego se debe comprobar que el numero 
// efectivamente debe estar en ese rango, si no lo esta imprima un mensaje de error.Si lo esta 
// imprima reprobado ,. si la calificacion es inferior a 6,"regular" si esta entre 6 y 8 "bien,
// si es 9 y excelente si es 10"


/*let nota;
nota = parseInt(prompt('Ingrese nota '));
if ( nota >=1 &&  nota <= 10 ) {
    console.log ('nota esta en el rango');   
    if ( nota >= 1 && nota < 6 ) {
         console.log ("Reprobado") }
    if ( nota >= 6 && nota <= 8 ) {
         console.log ("Regular") }
    if ( nota === 9  ) {   
         console.log ("Bien") }   
    if ( nota === 10  ) {   
         console.log ("Excelente") }   
    } else  if ( nota > 10 ) { 
        alert ("nota no esta en el rango")}; */
    



// PREGUNTA  12 :
// Escribe un programa que responda a un usuario que quiere comprar un helado en una 
// conocida marca de comida rapida, cuanto le costara en funcion del topping que elija : 
// 
//  * El helado sin topping cuesta 50 MXN
//  * El topping de Oreo cuesta 10 MXN
//  * El topping de kitkat cuesta 15 MXN
//  * El topping de Brownie cuesta 20 MXN
//  
//  En caso de no disponer del topping solicitado por el usuario, el programa le 
//  indicara "no tenemos este topping, lo sentimos" y a continuacion le informara 
//  el precio del helado sin ningun topping.


/*let helado;
helado = parseInt(prompt('Ingrese que tipo de helado desea del 1 al 4 :'));

switch  (helado) {
      case 1 :
        alert ('El topping de Oreo cuesta 10 MXNs');
        break;
      case 2 :
        alert ('El topping de kitkat cuesta 15 MXN');
        break;
      case 3 :
        alert ('El topping de Brownie cuesta 20 MXN');
        break;
      case 4 :  
       alert ('No tenemos este topping, lo sentimos')
       alert ('Pero nos queda El helado sin topping y  cuesta 50 MXN');
       break;
 };*/





// PREGUNTA  13 :
// Un conocido portal de educacionen tecnologia esta ofreciendo programas
// para aprender a desarrollar aplicaciones. Escribe un programa que le indique a 
// a la persona interesada cuanto debera pagar mensualmente de acuerdo a la 
// opcion elegida
// El programa educativo contempla 3 niveles, cada uno con su costo mensual :
//  
//  * Course   : $ 4999 MXN
//  * Carrera  : $ 3999 MXN
//  * Master   : $ 2999 MXN
//  
//  Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento 
//  correspondiente al precio final.
//
//  * Beca Facebook  : 20 % de Descuento.
//  * Beca Google    : 15 % de Descuento.
//  * Beca Jesua     : 50 % de Descuento.     
//  
// 
//  Finalmente , ademas del precio mensual con descuento, indicar al usuario
//  cuanto gastaria en total por el curso elegido, tomando en cuenta las  
//  siguientes duraciones :
//
//
//   * Course  :  2 meses
//   * Carrera :  6 meses
//   * Master  : 12 meses.
//

/*
alert("PROGRAMA  EDUCATIVO 3 NIVELES CON PROMOCION DE BECAS :")

let curso   = 5000;
let carrera = 4000;
let master  = 3000;

let cursoPrecioDscto1 = 0;
let precioxmesDscto1  = 0;
let cursoPrecioDscto2 = 0;
let precioxmesDscto2  = 0;
let cursoPrecioDscto3 = 0;
let precioxmesDscto3  = 0;
let carreraPrecioDscto1= 0;
let precioxmesDscto4   = 0;
let carreraPrecioDscto2= 0;
let precioxmesDscto5   = 0;
let carreraPrecioDscto3= 0;
let precioxmesDscto6   = 0;
let masterPrecioDscto1 = 0;
let precioxmesDscto7   = 0;
let masterPrecioDscto2 = 0;
let precioxmesDscto8   = 0;
let masterPrecioDscto3 = 0;
let precioxmesDscto9   = 0;


if (confirm ("Desea informacion sobre los cursos") ) {

   alert( "  CURSO   : Costo mensual $ 5000 ") 
   alert( "  CARRERA : Costo mensual $ 4000 ") 
   alert( "  MASTER  : Costo mensual $ 3000 ") 

  if (confirm ('Estimado cliente cuenta con alguna beca'))  {
      let opcion = parseInt(prompt('marcar : 1 o 2 o 3 para mas informacion'));
      let resul = opcion ; 
      if (resul === 1 )  { 
        if  (confirm('Curso con BECA FACEBOOK  : 20 % DSCTO' ) ) { 
              cursoPrecioDscto1 = (curso * 2) - ((curso * 2) * 20/100) ;  // PRECIO TOTAL X CURSO C/BECA FACEBOOK
              precioxmesDscto1 = cursoPrecioDscto1 / 2                    // PRECIO X MES
              alert('costo del curso x mes es ' + precioxmesDscto1)
              alert('costo total del curso 2 meses es ' + cursoPrecioDscto1)
            }
        if  (confirm ('Curso con BECA GOOGLE : 15 % DSCTO'))  {
              cursoPrecioDscto2 = (curso * 2) - ((curso * 2) * 15/100) ; // PRECIO TOTAL X CURSO C/BECA GOOGLE
              precioxmesDscto2 = cursoPrecioDscto2 / 2                    // PRECIO X MES
              alert('costo del curso x mes es ' + precioxmesDscto2)
              alert('costo total del curso 2 meses es ' + cursoPrecioDscto2)
            }          
        if (confirm ('Curso con BECA JESUA : 50 % DSCTO') ) {
              cursoPrecioDscto3 = (curso * 2) - ((curso * 2) * 50/100) ; // PRECIO TOTAL X CURSO C/BECA JESUA        
              precioxmesDscto3 = cursoPrecioDscto3 / 2                    // PRECIO X MES
              alert('costo del curso x mes es ' + precioxmesDscto3)
              alert('costo total del curso 2 meses es ' + cursoPrecioDscto3)
          } 
        }  
      if (resul === 2 ) {
        if  (confirm('Carrera con BECA FACEBOOK  : 20 % DSCTO' ) ) { 
              carreraPrecioDscto1 = (carrera * 6) - ((carrera * 6) * 20/100) ;// PRECIO TOTAL X CURSO C/BECA FACEBOOK
              precioxmesDscto4 = carreraPrecioDscto1 / 6                      // PRECIO X MES
              alert('costo de carrera x mes es ' + precioxmesDscto4)
              alert('costo total de carrera 6 meses es ' + carreraPrecioDscto1)
            }
        if  (confirm ('Carrera con BECA GOOGLE : 15 % DSCTO'))  {
              carreraPrecioDscto2 = (carrera * 6) - ((carrera * 6) * 15/100) ; // PRECIO TOTAL X CURSO C/BECA GOOGLE
              precioxmesDscto5 = carreraPrecioDscto2 / 6                       // PRECIO X MES           
              alert('costo de carrera x mes es ' + precioxmesDscto5)
              alert('costo total de carrera 6 meses es ' + carreraPrecioDscto2)
            }          
        if (confirm ('Carrera con BECA JESUA : 50 % DSCTO') ) {
              carreraPrecioDscto3 = (carrera * 6) - ((carrera * 6) * 50/100) ; // PRECIO TOTAL X CURSO C/BECA JESUA
              precioxmesDscto6 = carreraPrecioDscto3 / 6                       // PRECIO X MES
              alert('costo de carrera x mes es ' + precioxmesDscto6)
              alert('costo total de carrera 6 meses es ' + carreraPrecioDscto3)
           } 
          }  
      if (resul === 3 ) {
        if  (confirm('Master con BECA FACEBOOK  : 20 % DSCTO' ) ) { 
              masterPrecioDscto1 = (master*12) - ((master * 12) * 20/100) ;    // PRECIO TOTAL X CURSO C/BECA FACEBOOK
              precioxmesDscto7 = masterPrecioDscto1 / 12                       // PRECIO X MES                   
              alert('costo de master x mes es ' + precioxmesDscto7)
              alert('costo total de master 12 meses es ' + masterPrecioDscto1)
                }
        if  (confirm ('Master con BECA GOOGLE : 15 % DSCTO'))  {
              masterPrecioDscto2 = (master*12) - ((master * 12) * 15/100) ;    // PRECIO TOTAL X CURSO C/BECA GOOGLE
              precioxmesDscto8 = masterPrecioDscto2 / 12                       // PRECIO X MES               
              alert('costo de master x mes es ' + precioxmesDscto8)
              alert('costo total de master 12 meses es ' + masterPrecioDscto2)
                }          
        if (confirm ('Master con BECA JESUA : 50 % DSCTO') ) {
              masterPrecioDscto3 = (master*12) - ((master * 12) * 50/100) ;   // PRECIO TOTAL X CURSO C/BECA JESUA
              precioxmesDscto9 = masterPrecioDscto3 / 12                      // PRECIO X MES
              alert('costo de master x mes es ' + precioxmesDscto9)
              alert('costo total de master 12 meses es ' + masterPrecioDscto3)
               } 
         }  
        }  else {
              alert('Lo Sentimos esta no es una opcion ')
        };
  };
*/



// PREGUNTA 14 :
// Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un
// vehiculo con carga extra por los litros consumidos,tomando en consideracion lo siguiente :
// Si el vehiculo es coche el precio kilometro ha de ser 0.20
// Si es Moto ha de ser 0.10
// y Si es autobus es 0.5
// Si los litros consumidos estan entre 0 y 100 se ha de añadir 5 al costo total
// Si es mayor la cantidad de litros consumidos se ha de añadir 10 al total
// Considere que total a pagar = (precio kilometro * kilometros recorridos) + extra por litros consumidos.

/*  let coche;
  const preciokmCoche   = 0.20;
  const precioKMoto     = 0.10;
  const preciokmautobus = 0.5;
  let KmRecorridos;
  let LitrosConsumidos;
  let LitCon =0;
  let totalpagar =0;

  coche = parseInt(prompt('ingrese tipo de vehiculo coche=1 , moto=2, autobus=3'))
  let c = coche ;

  if ( c === 1 ) {
      KmRecorridos  = parseInt(prompt('Ingrese kilometros recorridos '))
      LitrosConsumidos =parseInt(prompt(' ingrese litros consumidos'))
      LitCon = LitrosConsumidos
      if  (LitCon>=0 && LitCon<=100 ) {
            totalpagar = ((preciokmCoche * KmRecorridos ) + 5 )
            console.log('total pago coche ' + totalpagar);
      } else if (LitCon>100 ) {
            totalpagar = ((preciokmCoche * KmRecorridos  ) + 10)
            console.log('total pago coche ' + totalpagar);
      } 
  }  
    if ( c === 2 ) {
      KmRecorridos  = parseInt(prompt('Ingrese kilometros recorridos '))
      LitrosConsumidos = parseInt(prompt(' ingrese litros consumidos'))
      LitCon = LitrosConsumidos
      if  (LitCon>=0 && LitCon<=100 ) {
           totalpagar = ((precioKMoto * KmRecorridos ) + 5 )
            console.log('total pago moto ' + totalpagar);
      } else if (LitCon>100 ) {
            totalpagar = ((precioKMoto * KmRecorridos  ) + 10 )
            console.log('total pago moto ' + totalpagar);
    } 
  }
    if ( c === 3 ) {
      KmRecorridos  = parseInt(prompt('Ingrese kilometros recorridos '))
      LitrosConsumidos =parseInt(prompt(' ingrese litros consumidos'))
      LitCon = LitrosConsumidos
      if  (LitCon>=0 && LitCon<=100 ) {
            totalpagar = ((preciokmautobus * KmRecorridos  ) + 5 )
            console.log('total pago autobus ' + totalpagar);
      } else if (LitCon>100 ) {
            totalpagar = ((preciokmautobus * KmRecorridos  ) + 10)
            console.log('total pago autobus ' + totalpagar);
    } 
  }
*/

 










