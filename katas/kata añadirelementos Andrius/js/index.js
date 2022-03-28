//function crearTarea(e) {
    const crearTarea = document.getElementById("addbtn")

    crearTarea.addEventListener("click", (e) =>{
        e.preventDefault();
        console.log("inicio")
        let NombreTarea = document.getElementById("nombretarea").value;
        let DescripTarea = document.getElementById("descriptarea").value;
        //recibe datos del index
    
      

        const NuevaTarea = document.createElement("div");
        NuevaTarea.className += "nuevatarea"  //Aplica la clase css "nuevatarea al div de la constante NuevaTarea"
        const NuevoSpan = document.createElement("span");
        NuevoSpan.textContent = "Título Tarea";
        const p = document.createElement("p")
        const pnombretarea = NombreTarea; //Crea una constante para el valor
        p.textContent = pnombretarea;// le pasa el valor como contenido de texto

        //Crea el div mete el span, le pasa el valor al span, crea el P donde va a ir el valor del titulo de la tarea
        //es decir NombreTarea y se lo pasa.

        const NuevoSpan2 = document.createElement("span");
        NuevoSpan2.textContent = "Descripción";
        const p2 = document.createElement("p")
        const p2Descrip = DescripTarea;
        p2.textContent = p2Descrip;



        NuevaTarea.appendChild(NuevoSpan);
            NuevaTarea.appendChild(p);
         //Indica que meta el span, dentro del div que ha creado y luego que meta el p.   
         NuevaTarea.appendChild(NuevoSpan2);
         NuevaTarea.appendChild(p2);


        /*/  LO QUE PASABA ERA QUE DOCUMENT.WRITE VOLVIA A ESCRIBIR EN EL DOCUMENTO Y CLARO, ya no habia div listatareas donde añadir nada
        ni nada de lo anterior, machacaba todo y escribia el div que yo le habia dicho. Hay que usar document.createElement*/


    
        const divtareas = document.getElementById("listatareas");
        divtareas.appendChild(NuevaTarea);
        //Seleciona el div listatareas y crea un elemento hijo llamado NuevaTarea
        //osea debe de meter ahí el div creado con la tarea.
    
        console.log("ha recorrido todo")


    
    })


    //--------------------------------function BORRAR TAREA----------------------------------------------------------//
    //                                                                                                               //
    //---------------------------------------------------------------------------------------------------------------//
        
    const borrarTarea   = document.getElementById("dltbtn");

    borrarTarea.addEventListener("click", (e) =>{
        e.preventDefault();
        console.log("clickado borrar tarea")   
     })

    
  



