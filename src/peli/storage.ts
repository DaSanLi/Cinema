import type { pelicula } from "./types.js";

export class Storage{
    Peliculas: string;
    
    constructor(){
        this.Peliculas = "Peliculas";
    }


    getData(): pelicula[]|null {
        const peliculas = localStorage.getItem(this.Peliculas) 
        if(!peliculas){
            return null
        }
        return JSON.parse(peliculas)
    }

    getLastId(): number|undefined{
        const listado = localStorage.getItem(this.Peliculas)
        if(!listado){
            return undefined
        }
        const array: pelicula[] = JSON.parse(listado)
        const id: number|undefined = array[array?.length -1]?.id
        if(!id){
            throw new Error("No se pudo obtener el id")
        }
        return id + 1
    }

    saveData(data:pelicula): void{
        const listado = this.getData()
        if(!listado){
            localStorage.setItem(this.Peliculas, JSON.stringify([data]))
        }else if(listado && listado.length > 0){
            const nuevoListado = [...listado, data]
            localStorage.setItem(this.Peliculas, JSON.stringify(nuevoListado))
        }
    }
}