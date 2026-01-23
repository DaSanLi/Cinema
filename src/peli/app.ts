import { Add } from "./add.js";

export class App{
    add: Add;

    constructor(){
        this.add = new Add()
    }

    //añadir, buscar y listar pelis
    load(){

        //añadir peli
        this.add.peliSave();

        //buscar peli


        //listar pelis

    }
}