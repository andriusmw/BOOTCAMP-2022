function crearTarea() {
    let NombreTarea = document.getElementById("nombretarea").value;
    let DescripTarea = document.getElementById("descriptarea").value;
    //recibe datos del index

    document.write("<div class=`nuevatarea`> <span>Título Tarea</span>"
     + NombreTarea + "<span>Descripción</span>" 
     + DescripTarea + "</div>")




}