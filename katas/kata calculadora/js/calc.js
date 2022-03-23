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