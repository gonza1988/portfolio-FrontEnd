export class persona {
    id?: number; /*agregando el signo de pregunta le decimos que ese atributo no es necesario, por ende no se pone en el constructor y no tira error*/
    nombre: string;
    apellido: string;
    img: string;

    constructor(nombre: string, apellido:string, img:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}