
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