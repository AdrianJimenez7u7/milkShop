//variables y constantes
const añadir = document.querySelector(".anadir");
const nombre = document.querySelector(".nombre");
const direccion = document.querySelector(".direccion");
const litros = document.querySelector(".litros");
const ul = document.querySelector('ul');
const empty = document.querySelector(".empty");
const borrar = document.querySelector(".borrar");
var total = 0.0;
//metodos listener
añadir.addEventListener('click', (e) => {
    e.preventDefault();
    const textName = nombre.value;
    const textDireccion = direccion.value;
    const textLitros = parseFloat(litros.value);
    if ((nombre.value !=="") && (direccion.value!== "") && (litros.value !== "")) {
            if (textLitros >= 0){
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = ["Nombre: " + textName, " Direccion: " + textDireccion, " Litros: " + textLitros];
            li.appendChild(p);
            empty.style.display = "none"
            ul.appendChild(li);
            total += textLitros;
            setTotal();
            limpiarInput();
            }else{
                window.alert("litros no validos");
            }//fin ifelse
    }else{
        window.alert("celdas sin llenar");
    }//fin ifelse
    
})

borrar.addEventListener('click', (x) => {   
    const verificador = document.querySelectorAll('li');
    for (let i = 0; i < verificador.length; i++) {
        ul.removeChild(verificador[i]);
    }
    total = 0.0;
    setTotal();
    empty.style.display = "block";
})

//metodos
function limpiarInput(){
    nombre.value = ""; 
    direccion.value = ""; 
    litros.value = "";
}

function setTotal() {
    document.getElementById("total").innerHTML = total;
    document.getElementById("dinero").innerHTML = (total * 23.30);
}

//
function noRecargo(){
    e.preventDefault();
}