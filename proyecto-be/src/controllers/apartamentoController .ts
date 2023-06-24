import { Body, Controller, Get, Post, Query, Delete, Headers, Req } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { Apartamento } from 'src/models/apartamento';

@Controller('apartamento')
export class ApartamentoController {
    @Post()
    async create(@Body() body: Apartamento, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_apartamento(numero, piso, valor, status_eliminado, id_public_habitante, id_public_condominio, creador) VALUES (${body.numero}, ${body.piso}, ${body.valor}, '${body.status_eliminado}', ${body.id_public_habitante}, ${body.id_public_condominio}, ${headers.authorization})`;
        
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        connection.end();

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: Apartamento): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_apartamento SET numero=${body.numero}, piso=${body.piso}, valor=${body.valor}, status_eliminado='${body.status_eliminado}', id_public_habitante=${body.id_public_habitante}, id_public_condominio=${body.id_public_condominio} WHERE id_public_apartamento=${body.id}`;

        const output: any = {};
        await SqlHelper.run(connection, command, output);

        connection.end();

        if (output === null) {
            return 'User could not be edited';
        }

        return 'ok';
    }

    @Post('logic-delete')
    async logicDelete(@Body() body: Apartamento): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_apartamento SET status_eliminado=2 WHERE id_public_apartamento=${body.id}`;

        const output: any = {};
        await SqlHelper.run(connection, command, output);

        connection.end();

        if (output === null) {
            return 'User could not be edited';
        }

        return 'ok';
    }

    @Get('view')
    async findOne(@Query('id') id): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const output: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_apartamento as id FROM public_apartamento WHERE id_public_apartamento=${id}`, output);

        connection.end();

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize, @Headers() headers): Promise<any> {
        console.log(headers);
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_apartamento WHERE public_apartamento.status_eliminado != 2 AND public_apartamento.creador=${headers.authorization}`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, public_condominio.nombre as condominio_nombre, id_public_apartamento as id FROM public_apartamento LEFT JOIN public_condominio on public_apartamento.id_public_condominio=public_condominio.id_public_condominio WHERE public_apartamento.status_eliminado != 2 AND public_apartamento.creador=${headers.authorization} LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        connection.end();

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_apartamento WHERE id_public_apartamento IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        connection.end();
        
        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
}
