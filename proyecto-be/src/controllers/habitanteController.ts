import { Body, Controller, Get, Post, Query, Headers } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { Habitante } from 'src/models/habitante';

@Controller('habitante')
export class HabitanteController {
    @Post()
    async create(@Body() body: Habitante, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_habitante(nombre, apellido, tipo_cedula, cedula, correo, telefono, linea_telefono, status_eliminado, status, password, username, creador) VALUES ('${body.nombre}', '${body.apellido}', '${body.tipo_cedula}', ${body.cedula}, '${body.correo || ''}', ${body.telefono || null}, '${body.linea_telefono}','${body.status || null}', '${body.status || null}', '${body.password || null}','${body.username || null}', ${headers.authorization})`;
        
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: Habitante): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_habitante SET nombre='${body.nombre}', apellido='${body.apellido}', tipo_cedula='${body.tipo_cedula}', cedula=${body.cedula}, correo='${body.correo || ''}', telefono=${body.telefono}, linea_telefono='${body.linea_telefono}', status_eliminado='${body.status_eliminado}', status='${body.status}', password='${body.password}', username='${body.username}' WHERE id_public_habitante=${body.id}`;
        console.log(command, body);
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
        await SqlHelper.run(connection, `SELECT *, id_public_habitante as id FROM public_habitante WHERE id_public_habitante=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_habitante WHERE public_habitante.status_eliminado != 2 AND public_habitante.creador=${headers.authorization}`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, public_habitante.id_public_habitante as id, a.piso, a.numero, a.id_public_condominio FROM public_habitante LEFT JOIN public_apartamento as a ON a.id_public_habitante=public_habitante.id_public_habitante WHERE public_habitante.status_eliminado != 2 AND public_habitante.creador=${headers.authorization} LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }
    
    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_habitante WHERE id_public_habitante IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
    @Post('logic-delete')
    async logicDelete(@Body() body: Habitante): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_habitante SET status_eliminado=2 WHERE id_public_habitante=${body.id}`;

        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be edited';
        }

        return 'ok';
    }
}
