//-------------------ARTICULO 1 ----------------------//
//----------------------------------------------------//
const articulo = document.getElementById("articulo1");

articulo.addEventListener("dragstart", e => {
    
    e.dataTransfer.setData("id", e.target.id);
    console.log("drag start");

});

 articulo.addEventListener('dragend',(event)=>{

    console.log("drag End works!")
  });
  articulo.addEventListener('drag',(event)=>{

    console.log("drag  works!")
  });
  

//-------------------ARTICULO 2 ----------------------//
//----------------------------------------------------//
const articulo2 = document.getElementById("articulo2");

articulo2.addEventListener("dragstart", e => {
  e.dataTransfer.setData("id", e.target.id);
    console.log("drag start");
});

 articulo2.addEventListener('dragend',(event)=>{

    console.log("drag End works!")
  });
  articulo2.addEventListener('drag',(event)=>{

    console.log("drag  works!")
  });
  

//-------------------ARTICULO 3 ----------------------//
//----------------------------------------------------//
const articulo3 = document.getElementById("articulo3");

articulo3.addEventListener("dragstart", e => {
    
    console.log("drag start");
});

 articulo3.addEventListener('dragend',(event)=>{

    console.log("drag End works!")
   // articulo3.className += "dropp"
    //contendor.appendChild(articulo3)
    
  });
  articulo3.addEventListener('drag',(event)=>{

    console.log("drag  works!")
  });
  

//-------------------CONTENEDOR ---------------//
//---------------------------------------------//


const contendor = document.getElementById("carrito");

contendor.addEventListener("dragenter", e => {
    console.log("Drag Enter")
})
contendor.addEventListener("dragleave", e => {
    console.log("Drag Leave")
})
contendor.addEventListener("dragover", e => {
    e.preventDefault(); //prevee su ejecución por defecto para que funcione Drop
   // console.log("Drag Over")
})
contendor.addEventListener("drop", e => {
    console.log("Drop")
    //const artcomprado = document.getElementsByClassName("dropp").textContent;
   // contendor.appendChild(artcomprado)
    //contendor.appendChild(articulo3)
    const id = e.dataTransfer.getData("id");

    if (id == "artid1"  || "artid2"  || "artid3")  {
        console.log(id);
    }



})
