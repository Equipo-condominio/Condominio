import { Body, Controller, Get, Post, Query, Headers } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { Condominio } from 'src/models/condominio';

@Controller('condominio')
export class CondominioController {
    @Post()
    async create(@Body() body: Condominio, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_condominio(rif, nombre, cantidad_apartamento, numero_pisos, valor, status_eliminado, id_public_fondo_reserva, id_public_users, public_estado_id, public_ciudad_id, public_municipio_id, public_parroquia_id, creador) VALUES (${body.rif},'${body.nombre}', ${body.cantidad_apartamento}, ${body.numero_pisos}, ${body.valor},'${body.status_eliminado}', ${body.id_public_fondo_reserva || null}, ${body.id_public_users || null}, ${body.public_estado_id || null}, ${body.public_ciudad_id || null}, ${body.public_municipio_id || null}, ${body.public_parroquia_id || null}, ${headers.authorization})`;
        console.log(command)
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: Condominio): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_condominio SET cantidad_apartamento=${body.cantidad_apartamento}, rif=${body.rif}, nombre='${body.nombre}', numero_pisos=${body.numero_pisos}, valor=${body.valor}, status_eliminado='${body.status_eliminado}', public_estado_id=${body.public_estado_id},public_ciudad_id=${body.public_ciudad_id},public_municipio_id=${body.public_municipio_id},public_parroquia_id=${body.public_parroquia_id}, id_public_fondo_reserva=${body.id_public_fondo_reserva }, id_public_users=${body.id_public_users} WHERE id_public_condominio=${body.id}`;
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
        await SqlHelper.run(connection, `SELECT *, id_public_condominio as id FROM public_condominio WHERE id_public_condominio=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_condominio WHERE public_condominio.status_eliminado != 2 AND public_condominio.creador=${headers.authorization}`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_condominio as id FROM public_condominio WHERE public_condominio.status_eliminado != 2 AND public_condominio.creador=${headers.authorization} LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_condominio WHERE id_public_condominio IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }

    @Post('logic-delete')
    async logicDelete(@Body() body: Condominio): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_condominio SET status_eliminado=2 WHERE id_public_condominio=${body.id}`;

        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be edited';
        }

        return 'ok';
    }
}
