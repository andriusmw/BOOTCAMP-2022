//const articulo = document.getElementsByClassName("articulo");
/*
articulo.addEventListener("dragstart", e => {
    e.preventDefault();
    console.log("drag start");
});*/

let articulos=document.querySelectorAll('.articulo');
articulos.forEach((articulo)=>{
 articulo.addEventListener('dragstart',(event)=>{

    console.log("drag start works!")
  });
});
//GETELEMENTBYCLASSNAME crea un array de objetos de todos los resultados encontradoscon esa clase
// de modo que habría que crear un array de objetos y para cada objeto escucharel evento 