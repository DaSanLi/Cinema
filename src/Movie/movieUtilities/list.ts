import type { movie } from "../types/types.js";
import { Storage } from "./storage.js";
import { deleteMovie } from "./delete.js";
import editMovies from "./edit.js";
import { createTemplateMovie, templateNoMovies } from "./templates/templates.js";

export class List {
    content: HTMLElement;
    storage: Storage;

    constructor() {
        const contentEl = document.querySelector<HTMLElement>("#content")
        if (!contentEl) {
            throw new Error("Los elementos del DOM no se encontraron");
        }
        this.content = contentEl
        this.storage = new Storage()
    }


    showMovies(movieFiltered: movie[]|undefined = undefined){
        this.content.innerHTML = "";
        if(!movieFiltered){
            const movies: movie[] = this.storage.getData() ?? []
            //se recorren todos las peliculas guardadas en el localStorage
            movies.forEach((movie)=>{
                this.content.innerHTML +=  createTemplateMovie(movie)
            })
        }else if(movieFiltered?.length === 0){
            this.content.innerHTML += templateNoMovies()
        }else if(movieFiltered.length > 0 || movieFiltered){
            //se recorren las peliculas filtradas por el buscador
            movieFiltered.forEach((movie)=>{
                this.content.innerHTML +=  createTemplateMovie(movie)
            })
        }

        //eliminar peliculas
        deleteMovie()

        //actualizar peliculas
        editMovies()
    }

}