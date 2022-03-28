const articulo = document.querySelector(".articulo");

articulo.addEventListener("dragstart", e => {
    
    console.log("drag start");
});
/*
let articulos=document.querySelectorAll('.articulo');
articulos.forEach((articulo)=>{

    
    

 articulo.addEventListener('dragstart',(event)=>{

    console.log("drag start works!")
  });*/
 /* articulo.addEventListener('dragend',(event)=>{

    console.log("drag End works!")
  });*/
 /* articulo.addEventListener('drag',(event)=>{

    console.log("drag  works!")
  });*/
  
//});*/
//GETELEMENTBYCLASSNAME crea un array de objetos de todos los resultados encontradoscon esa clase
// de modo que habría que crear un array de objetos y para cada objeto escucharel evento 

const contendor = document.getElementById("carrito");

contendor.addEventListener("dragenter", e => {
    console.log("Drag Enter")
})
contendor.addEventListener("dragleave", e => {
    console.log("Drag Leave")
})
contendor.addEventListener("dragover", e => {
    e.preventDefault(); //prevee su ejecución por defecto para que funcione Drop
    console.log("Drag Over")
})
contendor.addEventListener("drop", e => {
    console.log("Drop")
    //console.log(articulos)
    //contendor.appendChild(articulo);
    const text = document.querySelector(".tituloart").textContent;
    
        const divart = document.createElement("div");
         const tituloart = document.createElement("p");
         tituloart.textContent = text;
         console.log(text)

         divart.appendChild(tituloart);
        
         
       
         contendor.appendChild(divart);
    
})
