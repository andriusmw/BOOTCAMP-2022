function crearTarea() {
    let NombreTarea = document.getElementById("nombretarea").value;
    let DescripTarea = document.getElementById("descriptarea").value;
    //recibe datos del index

  

    let  NuevaTarea =  document.write("<div class=`nuevatarea`> <span>Título Tarea</span><br><br>"
    + NombreTarea + "<br><br><span>Descripción</span><br><br>" 
    + DescripTarea + "</div>")
    //Escribe el div y pone el titulo y la descripcion
    //Luego lo hemos asignadon a una variable con intención de poder pasarle todo
    //a otro div que elijamos por id y que salga dentro de la misma página sin recargar
    //pero no chuta :/ 

    let nuediv = document.getElementById("listatareas");
    nuediv.appendchild(NuevaTarea);






}