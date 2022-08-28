export class user { 

    id?: number;
    nombre: String;
    apellido: String;
    imagen: String;


    constructor(nombre: string, apellido: String, imagen: String) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
    }
    
}

