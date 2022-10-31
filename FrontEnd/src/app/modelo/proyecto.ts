export class Proyecto {

    id? : number;
    nombre : string;
    fecha : string;
    descripcion : string;
    imagen: String;

    constructor( nombre: string,fecha: string, descripcion: string, imagen: String) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

}
