import { Body, Controller, Get, Post, Query, Headers } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { FondoReserva } from 'src/models/fondo_reserva';
import { Registro_gastos } from 'src/models/registro_gastos';

@Controller('registro_gastos')
export class Registro_gastosController {
    @Post()
    async create(@Body() body: Registro_gastos, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_registro_gastos(nombre, monto, fecha, status, cancelado_bs, cancelado_dollar, status_eliminado, id_tasa_dia, id_public_condominio, creador) VALUES ('${body.nombre}', ${body.monto}, '${body.fecha}', '${body.status || null }', ${body.cancelado_bs || null }, ${body.cancelado_dollar || null },'${body.status_eliminado || null }', ${body.id_tasa_dia || null },${body.id_public_condominio || null }, ${headers.authorization})`;
        
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: Registro_gastos): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const lastRegistro: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_registro_gastos as id FROM public_registro_gastos WHERE id_public_registro_gastos=${body.id}`, lastRegistro);

        let applyRegistro = false;
        if (lastRegistro.status !== 'Pagado' && body.status === 'Pagado') {
            applyRegistro = true;
        }

        let command: string = `UPDATE public_registro_gastos SET monto=${body.monto}, nombre='${body.nombre}', fecha='${body.fecha}', status='${body.status || null }', cancelado_bs=${body.cancelado_bs || null },cancelado_dollar=${body.cancelado_dollar || null }, status_eliminado='${body.status_eliminado || null }', id_tasa_dia=${body.id_tasa_dia || null }, id_public_condominio=${body.id_public_condominio || null } WHERE id_public_registro_gastos=${body.id}`;

        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be edited';
        }

        if (applyRegistro) {
            console.log(`SELECT * FROM public_condominio as c LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE c.id_public_condominio=${body.id_public_condominio}`)
            let fondoReserva: any = {};
            await SqlHelper.run(connection, `SELECT r.* FROM public_condominio as c LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE c.id_public_condominio=${body.id_public_condominio}`, fondoReserva);

            fondoReserva = fondoReserva.response[0];
            const egresoDollar = fondoReserva.egreso_dollar + parseInt(`${body.cancelado_dollar}`);
            const montoDollar = fondoReserva.monto_dollar - body.cancelado_dollar;

            const egresoBs = fondoReserva.egreso_bs + body.cancelado_bs;
            const montoBs = fondoReserva.monto_bs - body.cancelado_bs;

            await SqlHelper.run(connection, `UPDATE public_fondo_reserva SET egreso_dollar=${egresoDollar}, monto_dollar=${montoDollar}, egreso_bs=${egresoBs}, monto_bs=${montoBs} WHERE public_fondo_reserva.id_public_fondo_reserva=${fondoReserva.id_public_fondo_reserva}`);
        }

        return 'ok';
    }

    @Get('view')
    async findOne(@Query('id') id): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const output: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_registro_gastos as id FROM public_registro_gastos WHERE id_public_registro_gastos=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_registro_gastos WHERE public_registro_gastos.status_eliminado != 2 AND public_registro_gastos.creador=${headers.authorization}`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_registro_gastos as id FROM public_registro_gastos WHERE public_registro_gastos.status_eliminado != 2 AND public_registro_gastos.creador=${headers.authorization} LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_registro_gastos WHERE id_public_registro_gastos IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
}
