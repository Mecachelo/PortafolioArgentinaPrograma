export class user { 

    id?: number;
    nombre: String;
    apellido: String;
    descripcion: String;
    imagen: String;


    constructor(nombre: string, apellido: String,descripcion: String, imagen: String) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    
}

