import { Body, Controller, Get, Post, Query, Headers } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { Registro_de_pagos } from 'src/models/registro_de_pagos';

@Controller('registro_de_pagos')
export class Registro_de_pagosController {
    @Post()
    async create(@Body() body: Registro_de_pagos, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_registro_de_pagos(monto_bs, tipo, monto_dollar, fecha, concepto, banco, status_eliminado, id_public_apartamento, id_public_tasa_dia , id_public_factura, id_public_habitante, creador) VALUES (${body.monto_bs},'${body.tipo}',${body.monto_dollar}, '${body.fecha || null}','${body.concepto}', '${body.banco}','${body.status_eliminado}', ${body.id_public_apartamento || null}, ${body.id_public_tasa_dia || null}, ${body.id_public_factura || null}, ${body.id_public_habitante || null}, ${headers.authorization})`;
        
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        let fondoReserva: any = {};
        await SqlHelper.run(connection, `SELECT r.* FROM public_condominio as c LEFT JOIN public_apartamento as h ON c.id_public_condominio=h.id_public_condominio LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE h.id_public_apartamento=${body.id_public_apartamento}`, fondoReserva);
        fondoReserva = fondoReserva?.response[0];

        if (fondoReserva) {
            const ingresoDollar = fondoReserva.ingreso_dollar + parseInt(`${body.monto_dollar}`);
            const montoDollar = fondoReserva.monto_dollar + body.monto_dollar;
    
            const ingresoBs = fondoReserva.ingreso_bs + body.monto_bs;
            const montoBs = fondoReserva.monto_bs + body.monto_bs;
    
            await SqlHelper.run(connection, `UPDATE public_fondo_reserva SET ingreso_dollar=${ingresoDollar}, monto_dollar=${montoDollar}, ingreso_bs=${ingresoBs}, monto_bs=${montoBs} WHERE public_fondo_reserva.id_public_fondo_reserva=${fondoReserva.id_public_fondo_reserva}`);
        }

        await SqlHelper.run(connection, `UPDATE public_habitante SET ultimo_pago='${body.fecha}' WHERE id_public_habitante=${body.id_public_habitante}`);

        return output.response.insertId;
    }

    @Post('edit')
    async edit(@Body() body: Registro_de_pagos): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);

        let command: string = `UPDATE public_registro_de_pagos SET monto_bs=${body.monto_bs}, monto_dollar=${body.monto_dollar}, tipo='${body.tipo}', fecha='${body.fecha}', concepto='${body.concepto}', banco='${body.banco}', status_eliminado='${body.status_eliminado}', id_public_apartamento=${body.id_public_apartamento || null}, id_public_tasa_dia=${body.id_public_tasa_dia || null}, id_public_factura=${body.id_public_factura || null}, id_public_habitante=${body.id_public_habitante || null} WHERE id_public_registro_de_pagos=${body.id}`;
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
        await SqlHelper.run(connection, `SELECT * , id_public_registro_de_pagos as id FROM  public_registro_de_pagos WHERE id_public_registro_de_pagos=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize, @Headers() headers): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_registro_de_pagos WHERE public_registro_de_pagos.status_eliminado != 2 AND public_registro_de_pagos.creador=${headers.authorization}`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_registro_de_pagos as id FROM public_registro_de_pagos WHERE public_registro_de_pagos.status_eliminado != 2 AND public_registro_de_pagos.creador=${headers.authorization} LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_registro_de_pagos WHERE id_public_registro_de_pagos IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
}
