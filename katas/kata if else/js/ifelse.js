
function calcularcalificacion() {
    var nota = document.getElementById("nota").value ;


    if(nota <= 4){
        alert("tu nota es: " + nota + ", es Insuficiente");
              }else if(nota == 5 || nota == 6){
                 alert("tu nota es: " + nota + ", es Suficiente")
                     } else if(nota ==7 || nota == 8){
                        alert("tu nota es: " + nota + ", es Notable")
                            } else if(nota == 9 || nota == 10){
                                alert("tu nota es: " + nota + ", es Sobresaliente")
                                 } else {
                                    alert("INTRODUCE UN VALOR NUMÉRICO VÁLIDO DEL 0 AL 10")
                                 }
    }

    //Todavía se me cuela el signo . y - a pesar de poner input type number, los toma 
    //como valores nulos, osea que le da el valor 0 y por tanto sale por la primera salida
    // diciendo que es insuficiente en vez de tirar a la última y mostrar el error.