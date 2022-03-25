//function crearTarea(e) {
    const crearTarea = document.getElementById("addbtn")

    crearTarea.addEventListener("click", (e) =>{
        e.preventDefault();
        console.log("inicio")
        let NombreTarea = document.getElementById("nombretarea").value;
        let DescripTarea = document.getElementById("descriptarea").value;
        //recibe datos del index
    
      
    
      const NuevaTarea = document.write("<div class=`nuevatarea`> <span>Título Tarea</span><br><br>"
        + NombreTarea + "<br><br><span>Descripción</span><br><br>" 
        + DescripTarea + "</div>")
        //Escribe el div y pone el titulo y la descripcion
    
        const divtareas = document.getElementById("listatareas");
        divtareas.appendChild(NuevaTarea);
        //Seleciona el div listatareas y crea un elemento hijo llamado NuevaTarea
        //osea debe de meter ahí el div creado con la tarea.
    
        console.log("ha recorrido todo")
    
    })

    
  



