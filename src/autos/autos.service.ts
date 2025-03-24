import { Injectable } from '@nestjs/common';

@Injectable()
export class AutosService {
    private autos = [{id:"1", nombre:"subaru"},{id:"2", nombre:"toyota"}]

    getAutosservice(){
        return this.autos
    }

    postAutoservice(id:string,nombre:string){
     let auto = { id,nombre}
     this.autos.push(auto)
     console.log(this.autos)
     return this.autos;

    }
}