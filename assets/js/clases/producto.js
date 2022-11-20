class Producto{

    constructor(id,nombre,precio,img){

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;

    }
}

let procesador = new Producto(1,"Procesador",30000);
let memoria_ram = new Producto(2,"Memoria RAM",20000);
let placa_madre = new Producto(3,"Placa Madre",15000);
let placa_de_video = new Producto(4,"Placa de video",100000);
let gabinete = new Producto(5,"Gabinete",7000);
let fan_cooler = new Producto(6,"Fan cooler",5000);
