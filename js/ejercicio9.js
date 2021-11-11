// Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase=prompt('Escriba una frase');
console.log(frase);
console.log(frase.length);
console.log(frase.toLowerCase)

frase=frase.toLowerCase();

for(let i=0 ; i < frase.length; i++){
if (frase.charAt(i)=='a'|| frase.charAt(i)=='e'|| frase.charAt(i)=='i' || frase.charAt(i)=='o'|| frase.charAt(i)=="u"){
    document.write(frase.charAt(i));
}

}




// recorrer la frase con un bucle, el fin del bucle es cuando termien la frase frase.lenght
 
// if preguntar si cada caracter es una vocal o no frase.charAt(x)=a 
