import type { movie } from "../../types/types"

function createTemplateMovie(movie:movie){
    return `
        <article class="peli-items" id="movie-${movie.id}">
            <h3 class="title">${movie.title}</h3>
            <p class="description">${movie.description}</p>
            <button class="edit" id="edit-${movie.id}">Editar</button>
            <button class="delete" id="delete-${movie.id}">Borrar</button>
        </article>
    `
}

function templateNoMovies(): string{
    return `
        <article class="peli-items" id="noMovie">
            <h3 class="description">No hay coincidencias.</h3>
        </article>
    `
}

export { createTemplateMovie, templateNoMovies }