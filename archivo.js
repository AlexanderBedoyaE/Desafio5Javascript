class Articulo{// defino un objeto el cual es llamado Articulo
    constructor(nombreProducto, precioProducto){// su constructor y sus propiedades o caracteristicas
        this.nombre = nombreProducto;
        this.precio = parseFloat(precioProducto);
    }

    impuesto(){// defino algunos metodos en este caso defino impuesto y hablar
        this.precio = this.precio * 1.19; 
    }

    hablar(){
        console.log("su producto es: " + this.nombre + " y su precio es: " + this.precio);
    }
}

function ingreso(){// Defino una función por medio de la cual ingreso dos variables 
    let nombres = prompt("Ingrese el nombre del articulo por favor");//variable1
    let precios = prompt("Ingrese el precio por favor");//variable2
    console.log(nombres, precios);//imprimo los resultados
    const articulo1 = new Articulo(nombres, precios);// en esta parte pido la caracteristicas a nombrar de los articulos
    articulo1.impuesto();//calculo el impuesto
    articulo1.hablar();// y todo resultado es mostrado por este metodo
}
//const articulo2 = new Articulo("bananos", 2000); son pruebas
//articulo1.hablar();
ingreso();// se imprime

//Este es mi desafio tutora lo tuve que cambiar porque en el anterior no me dieron los resultados que esperaba