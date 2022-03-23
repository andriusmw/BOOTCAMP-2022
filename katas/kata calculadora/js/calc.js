 function suma() {
     var A = document.getElementById("operadorA").value ;
     var B = document.getElementById("operadorB").value ;
     A = +A;  //toNumnber
     alert("var A:" + A);
     B = +B;   //toNumber
     alert("var B:" + B);
     var result = A + B;
     alert("resultado SUMA: " + result);
 }

 function resta() {
    var A = document.getElementById("operadorA").value ;
    var B = document.getElementById("operadorB").value ;
    A = +A;  //toNumnber
    alert("var A:" + A);
    B = +B;   //toNumber
    alert("var B:" + B);
    var result = A - B;
    alert("resultado RESTA: " + result);
}

function multiplicar() {
    var A = document.getElementById("operadorA").value ;
    var B = document.getElementById("operadorB").value ;
    A = +A;  //toNumnber
    alert("var A:" + A);
    B = +B;   //toNumber
    alert("var B:" + B);
    var result = A * B;
    alert("resultado multiplicar: " + result);
}


function dividir() {
    var A = document.getElementById("operadorA").value ;
    var B = document.getElementById("operadorB").value ;
    A = +A;  //toNumnber
    alert("var A:" + A);
    B = +B;   //toNumber
    alert("var B:" + B);
    var cociente = A / B;
   // var resto = A % B;
    alert("cociente división: " + cociente);
   // alert("resto división: " + resto); 
   //lo divide de forma exacta de modo que el resto no es fiable.
}

