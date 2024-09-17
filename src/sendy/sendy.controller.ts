import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('datos')
export class SendyController {

    @Get()
    obtenerDatos(): any {
    const datos = [
    { id: 1, nombre: 'Ejemplo 1', valor: 100 },
    { id: 2, nombre: 'Ejemplo 2', valor: 200 }
    ];
    return datos; // Devuelve los datos en formato JSON
    }
}
