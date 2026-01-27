import { List } from "./list.js"
import { Storage } from "./storage.js";
import type { movie } from "../types/types.js";

export function deleteMovie(){

    const list = new List();
    const storage = new Storage();

    //peliculas mostradas
    const movies = document.querySelectorAll('#content .peli-items');

    movies.forEach((movie) => {
        const btn:HTMLButtonElement|null = movie.querySelector(`.delete`);
        if(btn){
            btn.onclick = function(){
                const listOfMovies: movie[] = storage.getData() ?? [];
                if(listOfMovies.length > 0){
                    const array = movie.id.split("");
                    const char = array[array.length -1];
                    if(char){
                        const id = parseInt(char);
                        const newList = listOfMovies.filter((item) =>(item.id !== id));
                        //se actualiza la lista
                        storage.updateList(newList);
                        //se renderiza la nueva lista en el dom
                        list.showMovies()
                    }
                }
            }
        };
    });

};