var dni="12345678H";

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numerodni= dni.substring(0, 8);
var letradni=dni.charAt(8);
if(numerodni<0 || numerodni>99999999){
    alert("No es un número válido");
}else{
    var resultado = numerodni % 23;
    var letracorrecta = letras[resultado];
    letradni=letradni.toUpperCase();

        if(letradni === letracorrecta){
            alert("numero y letra correcta");
        }else{
            alert("letra incorrecta");
        }
}
