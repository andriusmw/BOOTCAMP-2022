function crearTarea() {
    let NombreTarea = document.getElementById("nombretarea").value;
    let DescripTarea = document.getElementById("descriptarea").value;
    //recibe datos del index

  

   return  (document.write("<div class=`nuevatarea`> <span>Título Tarea</span><br><br>"
    + NombreTarea + "<br><br><span>Descripción</span><br><br>" 
    + DescripTarea + "</div>")
    //Escribe el div y pone el titulo y la descripcion
)}
  



