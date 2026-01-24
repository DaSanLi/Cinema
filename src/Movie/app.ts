import { Add } from "./add.js";
import { List } from "./list.js";

export class App{
    add: Add;
    list: List;

    constructor(){
        this.add = new Add()
        this.list = new List()
    }

    //añadir, buscar y listar pelis
    load(){

        //añadir peli
        this.add.peliSave();
        
        
        //buscar peli
        
        
        //listar pelis
        this.list.showMovies()

    }
}