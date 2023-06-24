import { Body, Controller, Get, Post, Query, Delete, Headers } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { FondoReserva } from 'src/models/fondo_reserva';

@Controller('fondo_reserva')
export class FondoReservaController {
    @Post()
    async create(@Body() body: FondoReserva, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_fondo_reserva(monto_bs, ingreso_bs, egreso_bs, monto_dollar, ingreso_dollar, egreso_dollar, status_eliminado, creador ) VALUES (${body.monto_bs || 0}, ${body.ingreso_bs || 0}, ${body.egreso_bs || 0}, ${body.monto_dollar || 0}, ${body.egreso_dollar || 0}, ${body.ingreso_dollar || 0},'${body.status_eliminado || null}', ${headers.authorization})`;
        
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: FondoReserva): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_fondo_reserva SET monto_bs=${body.monto_bs || 0}, ingreso_bs=${body.ingreso_bs || 0}, egreso_bs=${body.egreso_bs || 0}, monto_dollar=${body.monto_dollar || 0}, ingreso_dollar=${body.ingreso_dollar || 0}, egreso_dollar=${body.egreso_dollar || 0}, status_eliminado='${body.status_eliminado || null}' WHERE id_public_fondo_reserva=${body.id}`;
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
        await SqlHelper.run(connection, `SELECT *, id_public_fondo_reserva as id FROM public_fondo_reserva WHERE id_public_fondo_reserva=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_fondo_reserva WHERE public_fondo_reserva.status_eliminado != 2 AND public_fondo_reserva.creador=${headers.authorization}`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_fondo_reserva as id FROM public_fondo_reserva WHERE public_fondo_reserva.status_eliminado != 2 AND public_fondo_reserva.creador=${headers.authorization} LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_fondo_reserva WHERE id_public_fondo_reserva IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
    @Post('logic-delete')
    async logicDelete(@Body() body: FondoReserva): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_fondo_reserva SET status_eliminado=2 WHERE id_public_fondo_reserva=${body.id}`;

        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be edited';
        }

        return 'ok';
    }
}
