import type { movie } from "./types.js";
import { Storage } from "./storage.js";
import { deleteMovie } from "./delete.js";

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

    createTemplatePelicula(movie:movie){
        return `
            <article class="peli-items" id="movie-${movie.id}">
                <h3 class="title">${movie.title}</h3>
                <p class="description">${movie.description}</p>
                <button class="edit" id="edit-${movie.id}">Editar</button>
                <button class="delete" id="delete-${movie.id}">Borrar</button>
            </article>
        `
    }

    showMovies(){
        this.content.innerHTML = "";
        const movies: movie[] = this.storage.getData() ?? []
        //se recorren todos las peliculas guardadas en el localStorage
        movies.forEach((movie)=>{
            this.content.innerHTML +=  this.createTemplatePelicula(movie)
        })

        //eliminar peliculas
        deleteMovie()

        //eliminar peliculas
    }

}