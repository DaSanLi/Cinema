import type { movie } from "./types.js";
import { Storage } from "./storage.js";
import { List } from "./list.js";


export class Add {
    title: HTMLInputElement;
    description: HTMLTextAreaElement;
    btn: HTMLButtonElement;
    storage: Storage;
    list: List;

    constructor() {
        const titleEl = document.querySelector<HTMLInputElement>("#title");
        const descriptionEl = document.querySelector<HTMLTextAreaElement>("#descripcion");
        const saveEl = document.querySelector<HTMLButtonElement>("#save");
        if (!titleEl || !descriptionEl || !saveEl) {
            throw new Error("Los elementos del DOM no se encontraron");
        }
        this.title = titleEl;
        this.description = descriptionEl;
        this.btn = saveEl;
        this.storage = new Storage();
        this.list = new List();
    }

    peliSave(){
        this.btn.onclick = (e: MouseEvent): void => {
            e.preventDefault()
            let title = this.title.value;
            let description = this.description.value;

            if(!title || !description){
                alert("Debes rellenar todos los campos si deseas agregar una película")
            }else{
                //crear objeto a guardar 
                const MovieToSave: movie = {
                    id: this.storage.getLastId() ?? 1,
                    title,
                    description
                }

                //guardar en el localStorage
                this.storage.saveData(MovieToSave)

                //actualizar el listado
                this.list.showMovies()
            }
        }
    }
}