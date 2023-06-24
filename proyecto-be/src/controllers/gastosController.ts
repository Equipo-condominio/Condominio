import { Body, Controller, Get, Post, Query, Delete, Headers } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { Gastos } from 'src/models/gastos';

@Controller('gastos')
export class GastosController {
    @Post()
    async create(@Body() body: Gastos, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_gastos(nombre, fecha, monto, status_eliminado, id_public_condominio, id_public_registro_gastos, creador) VALUES ('${body.nombre}', ${body.fecha}, ${body.monto},'${body.status_eliminado}', ${body.id_public_condominio}, ${body.id_public_registro_gastos}, ${headers.authorization})`;
        
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: Gastos): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_gastos SET nombre='${body.nombre}', fecha=${body.fecha}, monto=${body.monto}, status_eliminado='${body.status_eliminado}', id_public_condominio='${body.id_public_condominio}', id_public_registro_gastos=${body.id_public_registro_gastos} WHERE id_public_gastos=${body.id}`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be edited';
        }

        return 'ok';
    }

    @Get('view')
    async findOne(@Query('id') id): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const output: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_gastos as id FROM public_gastos WHERE id_public_gastos=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_gastos WHERE public_gastos.status_eliminado != 2 AND public_gastos.creador=${headers.authorization}`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_gastos as id FROM public_gastos WHERE public_gastos.status_eliminado != 2 AND public_gastos.creador=${headers.authorization} LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_gastos WHERE id_public_gastos IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
}
