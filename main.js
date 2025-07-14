console.log(`
    Ejercicio 1: Libro (Objeto básico + if)
Crear un sistema de préstamo de libros.Tareas:
1.
Usa el constructor Libro para crear un objeto con título y autor.
2.
Agrega una propiedad prestado = false.
3.
Implementa el método prestar() que:
•
Cambie prestado a true si el libro está disponible.
•
Muestre un mensaje de error si ya está prestado (usando if).
4.
Prueba prestar el libro dos veces y observa los mensajes.
`)


function libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;

  this.prestar = function () {
    if (this.prestado === false) {
      this.prestado = true;
      console.log(`El libro "${this.titulo}" de ${this.autor} está disponible.`);
    } else {
      console.log(`El libro "${this.titulo}" está prestado.`);
    }
  };
}


let libro1 = new libro("Cien Años de Soledad", "Gabriel García Márquez");
libro1.prestar();
libro1.prestar(); 


console.log(`
    
    Ejercicio 2: Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.Tareas:
1.
Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2.
Añade 3 productos con el método agregar().
3.
Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1. Manzanas").
4.
Muestra la lista completa en consola.

    `)

  function listaCompras() {
  this.productos = [];

  this.agregar = function (producto) {
    this.productos.push(producto);
  };

  this.mostrar = function () {
    console.log("Lista de compras:");
    for (let i = 0; i < this.productos.length; i++) {
      console.log(`${i + 1}. ${this.productos[i]}`);
    }
  };
}

let lista1 = new listaCompras();
lista1.agregar("Manzanas");
lista1.agregar("Pan");
lista1.agregar("Leche");
lista1.mostrar();



console.log(`
    Ejercicio 3: Reproductor de Música
Tareas:
1.
Crea un objeto Reproductor usando una función constructora con:
•
Una propiedad estado con valor inicial "detenido" (otros valores posibles: "reproduciendo", "pausado").
2.
Implementa estos métodos:
•
play():
•
Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo música...".
•
Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
•
pausar():
•
Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
•
Si no, muestra: "No hay música reproduciéndose.".
•
detener(): Cambia el estado a "detenido" y muestra: "Música detenida.".
    `)

function reproductor() {
  this.estado = "detenido";

  this.play = function () {
    if (this.estado === "detenido" || this.estado === "pausado") {
      this.estado = "reproduciendo";
      console.log("Reproduciendo música...");
    } else {
      console.log("Ya se está reproduciendo música.");
    }
  };

  this.pausar = function () {
    if (this.estado === "reproduciendo") {
      this.estado = "pausado";
      console.log("Música pausada.");
    } else {
      console.log("No hay música reproduciéndose.");
    }
  };

  this.detener = function () {
    this.estado = "detenido";
    console.log("Música detenida.");
  };
}


let reproductor1 = new reproductor();
reproductor1.play();    
reproductor1.pausar();  
reproductor1.play();    
reproductor1.detener(); 


console.log(`
    Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto usando métodos y condicionales (if/else).
Tareas:
1.
Crea un objeto Carrito usando una función constructora o clase que tenga:
•
Una propiedad productos (array vacío).
•
Una propiedad total (inicialmente 0).
2.
Implementa estos métodos:
•
agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
•
calcularDescuento():
•
Si el total es mayor a $100, aplica un 10% de descuento y muestra.
•
Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
•
Si no, mostrar total, sin descuento.`)

function carritoDeCompras(){
 this.productos = [];
 this.total=0;
 

}
