// Tenemos un li de productos

// esta mal escrito el objeto
const productos = [ productos ];
productos.push( {

  // No poner llaves {} de inicio o cierre
  nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg",
  nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg",
  nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg",
  nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg",
  nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg",
}  ); // Se debe utilizar llaves {} , no []

const li = document.getElementsByName("lista-de-productos")
const $i = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  // no usar variable var
  const d = document.createElement("div")
  d.classList.add("producto")

  // no usar variable var
  const ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function()
// while no  
    (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value; 
  console.log(texto);

  // falta abrir la llave {}
  const productosFiltrados = filtrado(productos, texto );
  {
  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div") // No usar variable (var) 
    d.classList.add("producto")
  
    // No usar variable (var)
    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    // No usar variable (var)
    const imagen = document.createElement("img"); 
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  