
//------------------------------------------ARTICULO 1 -------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------//
const articulo = document.getElementById("articulo1");

articulo.addEventListener("dragstart", e => {
    
    e.dataTransfer.setData("id", e.target.id);
    //console.log("drag start");
    //Transfiere el id al drop

    let nombre = document.getElementById("nombrearticulo1").textContent;
    e.dataTransfer.setData("Nombre", nombre);
    //console.log(nombre);
    //Esto le pasa el nombre del artículo

    let precio = document.getElementById("precio1").textContent;
    e.dataTransfer.setData("Precio", precio);
    //console.log(precio);
    //Esto le pasa el precio del artículo al drop

});

 articulo.addEventListener('dragend',(event)=>{

    //console.log("drag End works!")
  });
  articulo.addEventListener('drag',(event)=>{

   // console.log("drag  works!")
  });
  

//-----------------------------------------------------ARTICULO 2 --------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------//
const articulo2 = document.getElementById("articulo2");

articulo2.addEventListener("dragstart", e => {
  e.dataTransfer.setData("id", e.target.id);
    //console.log("drag start");
    //Transfiere el id al drop

    let nombre = document.getElementById("nombrearticulo2").textContent;
    e.dataTransfer.setData("Nombre", nombre);
    //console.log(nombre);
    //Esto le pasa el nombre del artículo

    let precio = document.getElementById("precio2").textContent;
    e.dataTransfer.setData("Precio", precio);
    //console.log(precio);
    //Esto le pasa el precio del artículo al drop
});

 articulo2.addEventListener('dragend',(event)=>{

    //console.log("drag End works!")
  });
  articulo2.addEventListener('drag',(event)=>{

  //  console.log("drag  works!")
  });
  

//--------------------------------------------------ARTICULO 3 -----------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------//

const articulo3 = document.getElementById("articulo3");

articulo3.addEventListener("dragstart", e => {
  e.dataTransfer.setData("id", e.target.id);
    //console.log("drag start");
    //Transfiere el id al drop

    let nombre = document.getElementById("nombrearticulo3").textContent;
    e.dataTransfer.setData("Nombre", nombre);
    //console.log(nombre);
    //Esto le pasa el nombre del artículo

    let precio = document.getElementById("precio3").textContent;
    e.dataTransfer.setData("Precio", precio);
    //console.log(precio);
    //Esto le pasa el precio del artículo al drop
});

 articulo3.addEventListener('dragend',(event)=>{

   // console.log("drag End works!")
   // articulo3.className += "dropp"
   
    
  });
  articulo3.addEventListener('drag',(event)=>{

   // console.log("drag  works!")
  });
  

//------------------------------------------------------CONTENEDOR -----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
var listaprecios = [];
//array que va a guardar los precios

const contendor = document.getElementById("carrito");

contendor.addEventListener("dragenter", e => {
    //console.log("Drag Enter")
})
contendor.addEventListener("dragleave", e => {
    //console.log("Drag Leave")
})
contendor.addEventListener("dragover", e => {
    e.preventDefault(); //prevee su ejecución por defecto para que funcione Drop
   // console.log("Drag Over")
})
contendor.addEventListener("drop", e => {
    console.log("Drop")
    //Muestro Drop para saber que se ejecuta
    const id = e.dataTransfer.getData("id");
    const nombre = e.dataTransfer.getData("Nombre");
    let precio = e.dataTransfer.getData("Precio")
    //Recibo los valores para id, nombre y precio, enviados en drag start

    if (id == "artid1"  || "artid2"  || "artid3")  {
        console.log(id);
        console.log(nombre);
        console.log(precio);
        //Muestra por consola

        let articulocomprado = document.createElement("div")
        articulocomprado.textContent = id
        //Crea elemento div y le pasa el textcontent del id

        let nombrearticulocomprado = document.createElement("p")
        nombrearticulocomprado.textContent = nombre;
        //Crea elemento p y le pasa el textcontent del nombre

        let precioarticulocomprado = document.createElement("p")
        precioarticulocomprado.textContent = precio;
        //Crea elemento p y le pasa el textcontent del precio
        precioarticulocomprado.className += "preciodrop"

        contendor.appendChild(articulocomprado);
        contendor.appendChild(nombrearticulocomprado);
        contendor.appendChild(precioarticulocomprado);

        precio = parseInt(precio);
       let precioapushear = precio
       listaprecios.push(precioapushear);

    }

//-------------------------------------------------CALCULAR TOTAL  -----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
let total = 0;
total = parseInt(total);

const calculadordetotal = document.getElementById("totalbutton");
calculadordetotal.addEventListener("click", e => {
  Calculartotal();
  console.log("el total es: " + total);
    total = 0;
    console.log("total tras sumar: " + total)
    })

function Calculartotal() {

 
  console.log("listaprecios: " + listaprecios)
  
  let i= 0;
  while ( i < listaprecios.length  ) {
    total = total + listaprecios[i]
    console.log('se ha ejecutado: '+  i + " veces");
   i++
  }
/*
  precioasalirentotal.forEach(element => {
    total = total + precio;
    console.log("precio total: " + total)
    total = 0;
  }
  );

  total = 0;
            */
    
    
 
    
   
}


})
