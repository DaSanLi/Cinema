import { List } from "./list.js"
import { Storage } from "./storage.js";
import type { movie } from "../types/types.js";

export default function editMovies (){

    const list = new List();
    const storage = new Storage()

    const movieList: movie[]|null = storage.getData();

    if(!movieList){
        throw new Error("Se deben agregar películas a la lista primero.")
    }

    //peliculas mostradas
    const moviesOnDOM = document.querySelectorAll<HTMLElement>('#content .peli-items');

    moviesOnDOM.forEach((movie) => {
        const btn:HTMLButtonElement|null = movie.querySelector(`.edit`);
        
        if(!btn){
            throw new Error("No se pudo localizar el botón edit")
        }
        
        //asignar evento a este btn 
        btn.onclick = function(){
            const id: string = movie.id;
            btn.remove()
            movie.querySelector('.delete')?.remove()

            let html_template: string =`
            <div class="edit_div">
                <hr/>
                <h3>Actualizar película</h3>
                <form>
                    <input type="text" class="edited_title" value="${movie.querySelector(".title")?.innerHTML}" placeholder="Ingresa un titulo"/> 
                    <textarea class="edited_description" placeholder="Ingresa una descripción">${movie.querySelector(".description")?.innerHTML}</textarea>
                    <input type="submit" class="update" value="Actualizar" />
                </form>
            </div>
            ` 

            //se agrega la plantilla html al dom con los respectivos valores ingresados
            movie.innerHTML += html_template;

            let update_btn = movie.querySelector<HTMLButtonElement>(".update");
            if(update_btn){
                update_btn.onclick = function(e){
                    e.preventDefault()
                    const array: string[] = id.split("-")
                    const elementId: string|undefined = array[array.length -1];
                    if(!elementId){
                        throw new Error("No se pudo encontrar el id del elemento.")
                    }
                    const title = movie.querySelector<HTMLInputElement>(".edited_title")?.value
                    const description =  movie.querySelector<HTMLTextAreaElement>(".edited_description")?.value
                    if(!title || !description){
                        throw new Error("No se ha podido acceder a los campos del formulario.")
                    }
                    const updateMovie:movie = {
                        id: parseInt(elementId),
                        title,
                        description
                    }
                    
                    const newMoviesList: movie[] = movieList.filter((item)=>(String(item.id) !== elementId)) 
                    newMoviesList.push(updateMovie)
                    
                    //actualizo la lista con el objeto creado
                    storage.updateList(newMoviesList)
                    list.showMovies()
                }
            }
        }
    });

}