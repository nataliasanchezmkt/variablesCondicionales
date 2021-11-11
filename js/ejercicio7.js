//  Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let nmb1 = parseInt(prompt ('Write the first number'));
let nmb2 = parseInt(prompt ('Write the second number'));
let nmb3 = parseInt(prompt ('Write the thrid number'));

if (nmb1>nmb2 && nmb1>nmb3){
    document.write('Mayor '+nmb1);
}else {
    if(nmb2>nmb1 && nmb2>nmb3){
        document.write('Mayor '+nmb2);
    }else{
        document.write('Mayor '+ nmb3);
    }
}


