import type { movie } from "./types.js";

export class Storage{
    Movies: string;
    
    constructor(){
        //aqui modificamos la clave con la que guardar el array de las peliculas
        this.Movies = "Peliculas";
    }


    getData(): movie[]|null {
        //obtenemos los datos guardados
        const listOfMovies = localStorage.getItem(this.Movies) 
        if(!listOfMovies){
            return null
        }
        return JSON.parse(listOfMovies)
    }


    getLastId(): number|undefined{
        const list = localStorage.getItem(this.Movies)
        if(!list){
            return undefined
        }
        const array: movie[] = JSON.parse(list)
        const id: number|undefined = array[array?.length -1]?.id
        if(!id){
            throw new Error("No se pudo obtener el id")
        }
        return id + 1
    }


    saveData(data:movie): void{
        const list: movie[] | null = this.getData()
        if(!list){
            localStorage.setItem(this.Movies, JSON.stringify([data]))
        }else if(list && list.length > 0){
            const newList = [...list, data]
            localStorage.setItem(this.Movies, JSON.stringify(newList))
        }
    }


    //este metodo actualizará la lista 
    updateList(movieList: movie[]): void {
        if(movieList.length > 0){
            localStorage.setItem(this.Movies, JSON.stringify(movieList))
        }
    }
}