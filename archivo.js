class Articulo {
    constructor(nombre, precio) {
        this.nombre  = nombre;
        this.precio  = precio; 
    }   
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    
    hablar(){
        alert("compre " + this.nombre + " y su precio es " + this.precio);
    }
}
const articulo1 = new Articulo("arroz", "30");
articulo1.sumaIva();
articulo1.hablar();
