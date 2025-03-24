import { Body, Controller, Get, Post } from "@nestjs/common"; 
import {AutosService} from "./autos.service";

@Controller("autos")
export class autosController{
    constructor(private readonly autoService: AutosService){}

    @Get()
    getAutos(){
        return this.autoService.getAutosservice()
    }

    @Post()
    postAutos(@Body() id, nombre){
        return this.autoService.postAutoservice(id,nombre)
    }

}
