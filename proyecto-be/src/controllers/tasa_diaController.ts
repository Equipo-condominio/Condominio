import { Body, Controller, Get, Post, Query, Delete } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { Tasa_dia } from 'src/models/tasa_dia';

@Controller('tasa_dia')
export class Tasa_diaController {
    @Post()
    async create(@Body() body: Tasa_dia): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_tasa_dia(precio_bcv, precio_dollar, fecha, status_eliminado) VALUES (${body.precio_bcv}, ${body.precio_dollar}, ${body.fecha}, '${body.status_eliminado}')`;
	
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: Tasa_dia): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_tasa_dia SET precio_bcv=${body.precio_bcv}, precio_dollar=${body.precio_dollar}, fecha=${body.fecha}, status_eliminado='${body.status_eliminado}' WHERE id_tasa_dia=${body.id}`;
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
        await SqlHelper.run(connection, `SELECT * FROM public_tasa_dia WHERE id_public_tasa_dia=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_tasa_dia`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT * FROM public_tasa_dia LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_tasa_dia WHERE id_public_tasa_dia IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
}
