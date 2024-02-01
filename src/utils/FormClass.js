import uuid4 from "uuid4";

export default class Usuario {
    #codigo;
    #nombre;
    #apellido;
    #email;
    #dni;
    #description

    constructor(codigo = uuid4(), nombre, apellido, email, dni, description){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
        this.#dni = dni
        this.#description = description
        
    }
    getCodigo(){ return this.#codigo;}

    getNombre() {
        return this.#nombre;
    }
    getApellido(){
        return this.#apellido;
    }
    getEmail(){
        return this.#email;
    }
    getDNI(){
        return this.#dni;
    }

    getDescription(){
        return this.#description
    }

    setCodigo(codigo){
        this.#codigo = codigo
    }
    setNombre(nombre){
        this.#nombre = nombre
    }
    setApellido(apellido){
        this.#apellido = apellido
    }    
    setEmail(email){
        this.#email = email
    }
    setDNI(dni){
        this.#dni = dni
    }

    setDescription(description){
        this.#description = description
    }
    toJSON(){
        return{
            codigo: this.#codigo,
            nombre :this.#nombre,
            apellido: this.#apellido,
            email: this.#email,
            dni: this.#dni,
            description: this.#description
        }
    }
}