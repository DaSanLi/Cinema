import type { pelicula } from "./types.js";
import { Storage } from "./storage.js";

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

    createTemplatePelicula(movie:pelicula){
        return `
            <article class="peli-items" id="pelicula-${movie.id}">
                <h3 class="title">${movie.title}</h3>
                <p class="Descripción">${movie.description}</p>
                <button class="edit" id="edit-${movie.id}">Editar</button>
                <button class="delete" id="delete-${movie.id}">Borrar</button>
            </article>
        `
    }

    addToList(movie:pelicula){
        //creo el nuevo objeto con html y variables dinamicas
        const newMovie = this.createTemplatePelicula(movie);

        //lo agrego al dom
        this.content.innerHTML += newMovie;

        //muestro las películas
        this.showMovies()
    }
    
    showMovies(){
        this.content.innerHTML = "";
        const movies: pelicula[] = this.storage.getData() ?? []
        //se recorren todos las peliculas guardadas en el localStorage
        movies.forEach((movie)=>{
            this.content.innerHTML +=  this.createTemplatePelicula(movie)
        })
    }

}