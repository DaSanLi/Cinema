import type { movie } from "../types/types.js";
import { List } from "./list.js"
import { Storage } from "./storage.js";

export default function search(){
    const list: List = new List()
    const storage: Storage = new Storage();


    const btn_search = document.querySelector<HTMLButtonElement>("#btn_search");
    const input_search = document.querySelector<HTMLInputElement>("#input_search")

    
    if(!btn_search || !input_search){
        throw new Error("No se pudo acceder a los campos de busqueda.");
    }
    btn_search.onclick = function(e: MouseEvent){
    e.preventDefault();
    const listOfMovies: movie[] = storage.getData() ?? []
    const movieFiltered: movie[] = listOfMovies.filter((movie) => {
        const resultado = movie.title.toLowerCase().includes(input_search.value.toLowerCase())
        return resultado
    });
    list.showMovies(movieFiltered)
    }
}