const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
//const empty = document.querySelector(".empty");
const divtareas = document.getElementById("listatareas");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
  const descrip = textarea.value;

  if (text !== "" & descrip!== "") {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const descripP = document.createElement("p")
    p.textContent = text;
    descripP.textContent = descrip;
   // descripP.className += "descripcion:read-only";
    //const LEER = document.getElementsByClassName("descripcion").readOnly = "true";

    div.className += "nuevatarea";

    div.appendChild(p);
    div.appendChild(descripP)
    div.appendChild(addDeleteBtn());
    
    const divtareas = document.getElementById("listatareas");
    divtareas.appendChild(div);
   

   // input.value = "";
    //empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    divtareas.removeChild(item);

   
  });

  return deleteBtn;
}


    
  



