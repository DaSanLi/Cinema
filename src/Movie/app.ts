import { Add } from "./movieUtilities/add.js";
import { List } from "./movieUtilities/list.js";
import search from "./movieUtilities/search.js";

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
        search()
        
        //listar pelis
        this.list.showMovies()

    }
}