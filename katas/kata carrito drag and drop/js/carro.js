
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
//lo creo aquí para que esté a la altura de la "raiz del scope y sea accesible desde el resto de scopes anidados "
var posicion = 0;
posicion = parseInt(posicion);

var listapreciosaborrar = []
//Creo otro array vacío con los precios a borrar
//para luego comparar uno con el otro para saber qué elemento borrar

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
        articulocomprado.className += "articulocomprado"
      
        //Crea elemento div y le pone clase

        let nombrearticulocomprado = document.createElement("p")
        nombrearticulocomprado.className += "articulocompradonombre"
        nombrearticulocomprado.textContent = nombre;
        //Crea elemento p y le pasa el textcontent del nombre

        let precioarticulocomprado = document.createElement("p")
        precioarticulocomprado.textContent = precio;
        //Crea elemento p y le pasa el textcontent del precio
        precioarticulocomprado.className += "preciodrop"

        contendor.appendChild(articulocomprado);
        articulocomprado.appendChild(nombrearticulocomprado);
        articulocomprado.appendChild(precioarticulocomprado);

        precio = parseInt(precio);
       let precioapushear = precio
       listaprecios.push(precioapushear);
        //paso el valor NUMÉRICO del precio del artículo añadido al array listaprecios para consultarlo después

         posicion = posicion + 1
        addDeleteBtn() //LLAMA A LA FUNCIÓN PARA CREE EL BOTÓN DE BORRAR



/*--------------------------------FUNCION DELETE BUTTON DENTRO DEL DROP ------------------- -------------------------*/
//---------------------------------------------------------------------------------------------------------------------

        function addDeleteBtn() {
          const deleteBtn = document.createElement("button");
        
          deleteBtn.textContent = "X";
          deleteBtn.className = "btn-delete";
          articulocomprado.appendChild(deleteBtn);
        
          //Igual que iba añadiendo precios al array listaprecios con cada drop, ahora, cada vez que genero el botón de borrar
          //añado el valor del precio al array preciosaborrar, como coincide con el array listaprecios, cuando recorra este
          //podré sacar la posición que debo BORRAR EN EL ARRAY LISTAPRECIOS. 
          let precioaborrar = e.dataTransfer.getData("Precio")
          precioaborrar = parseInt(precioaborrar);
          let precioasacar = precioaborrar
          listapreciosaborrar.push(precioasacar);

          console.log("array precios a borrar: " + listapreciosaborrar)


          deleteBtn.addEventListener("click", (e) => {
            const item = e.target.parentElement;
            contendor.removeChild(item);
            //Hasta aquí hemos borrado el elemento gráfico, pero falta borrarlo del array de precios 
            //Para ello usamos el bucle de abajo y los métodos .splice en el array listaprecios y en listapreciosaborrar
           
              j = 0;
            while (j <= listapreciosaborrar.length){
               if (listapreciosaborrar[j] == precioaborrar){
                    console.log("indice donde está el elemento a borrar: " + j)
                    //Cuando el valor de la posición del array es igual a precioaborrar, se para , sale y le pasa
                    //la posición, osea "j" al splice de abajo en listaprecios para saber qué posición del array coger
                    break;
               } else {
                 j++
                 console.log("está en el else, " + j + "veces")
               }


            }
           //lo de arriba me dice el indice a borrar, en splice. 
          
            listaprecios.splice(j, 1);
           //¿cómo le indico el indice? pasándoselo de recorrer el array anterior, donde listapreciosJ es = al precioaborrar
           console.log("lista de precios tras borrar: " + listaprecios);
          
           //tras borrar de la lista de precios, hay que borrar también de la lista de precios a borrar para que la próxima
           //vez que se le de a borrar el array que recorra sea el mismo que el de lista precios.
           listapreciosaborrar.splice(j, 1);
           //¿cómo le indico el indice? pasándoselo de recorrer el array anterior, donde listapreciosJ es = al precioaborrar
           console.log("lista de precios tras borrar: " + listapreciosaborrar);
           
        
           
          });
        
          return deleteBtn;
        }

       
/**----------------------------------------------------------------------------------- */
    }




})

//-------------------------------------------------CALCULAR TOTAL  -----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//



let total = 0;
total = parseInt(total);

document.getElementById("totalbutton").addEventListener("click", Calculartotal);



function Calculartotal(){

  let total = 0;
  total = parseInt(total);
  //seguramente tendré que reiniciar el array listprecios tras calculart un total o hacer que cuando se borra, se saque del array ese valor
  //mirar slice o sacar de array para llamarlo cuando se borre un elementop en borrar 
 
  console.log("listaprecios: " + listaprecios)
  
  let i= 0;
  while ( i < listaprecios.length  ) {
    console.log("precio a sumar en iteracción " + i +  "-" + listaprecios[i] )
    total = total + listaprecios[i]
    console.log("total en interación" + i + "= " + total)
    console.log('se ha ejecutado: '+  i + " veces");
   i++
  }

       console.log("el total es: " + total);
  //Aquí tendría que crear un div para que muestre el total
           let divtotal = document.createElement("div")
           divtotal.className += "divtotal"
           let totalresultado = document.createElement("p")
           totalresultado.textContent = total;
           divtotal.appendChild(totalresultado);
           const totalcontendor = document.getElementById("total");
           totalcontendor.appendChild(divtotal);
    //Crea elemento div divtotal, le pasa la clase divtotal para darle estilos. Crea elemento p, le pasa el texto de la variable total
    //lo metemos todo dentro del div donde va a mostrar el resultado con appenchild.
  
         total = 0;
        console.log("total tras sumar: " + total)
      }      

    //arriba he puesto que cada vez que se hace drop, el valor de precio entra a una array
    //llamado listaprecios. Para luego aquí abajo recorrer el array lista precios, tantas
    //veces como elementos haya en el array y a cada iteración, por cada elemento vaya acumulando
    //el precio en la variable total y cuando termina muestra el total

    //Se ejecuta la función Calculartotal() tantas veces como elementos haya en el carrito. 
    //entonces, calcula el precio 3 veces y no se suman esos 3 totales entre sí, solamente
    //porque en la linea 163 ,establezco el total a 0 por si se repite o añade o elimina elementos en el futuro
    //que no quite un elemento y se quede el precio puesto.

    //ARREGLADO!!!!! 
    //El fallo era que todo el código de calcular el total estaba dentro de los { } del código del contenedor, y por
    //tanto me contaba las veces que hacía drop como clicks y cuando yo le hacía click se enviaban todos los drops acumulados
    //como clicks y por eso volvía a llamar a la función calculartotal()
    //(pa matarme ...)
   
   
