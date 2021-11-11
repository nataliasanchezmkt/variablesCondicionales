//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let firstNumber =parseInt(prompt('write a first number'));
let secondNumber=parseInt(prompt ('write a second number'));

if (firstNumber>secondNumber){
    document.write(''+ firstNumber)
} else{
    if (firstNumber==secondNumber)
    {document.write('Same number '+firstNumber)}
    else
 {document.write(''+ secondNumber)}}

