import { Body, Controller, Get, Post, Query, Delete } from '@nestjs/common';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'src/common/constantes';
import { SqlHelper } from 'src/common/sqlHelper.entity';
import { Factura } from 'src/models/factura';

@Controller('factura')
export class FacturaController {
    @Post()
    async create(@Body() body: Factura): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_factura(total, iva, descuento, , status_eliminado, id_public_servicios, id_public_condominio) VALUES (${body.total}, ${body.iva}, ${body.descuento},${body.status_eliminado}', ${body.id_public_servicios}, ${body.id_public_condominio}, ${body.id_public_gastos})`;
        
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be created';
        }

        return output.response.insertId;
    }
    

    @Post('edit')
    async edit(@Body() body: Factura): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_factura SET total=${body.total}, iva=${body.iva}, descuento=${body.descuento}, status_eliminado='${body.status_eliminado}', id_public_servicios=${body.id_public_servicios}, id_public_condominio=${body.id_public_condominio}, id_public_gastos=${body.id_public_gastos} WHERE id_public_factura=${body.id}`;
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
        await SqlHelper.run(connection, `SELECT * FROM public_factura WHERE id_public_factura=${id}`, output);

        if (output === null) {
            return 'Query could not be executed';
        }

        return output;
    }
    
    @Get()
    async findAll(@Query('pageNumber') pageNumber, @Query('pageSize') pageSize): Promise<any> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        
        const count: any = {};
        await SqlHelper.run(connection, `SELECT COUNT(*) FROM public_factura`, count);
        
        const items: any = {};
        await SqlHelper.run(connection, `SELECT *, id_public_factura as id FROM public_factura WHERE public_factura.status_eliminado != 1 LIMIT ${pageNumber* pageSize}, ${pageSize}`, items);

        if (items === null) {
            return 'Query could not be executed';
        }

        return {items: items.response, count: count.response[0]['COUNT(*)']};
    }

    @Post('delete')
    async delete(@Body() body: any): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `DELETE FROM public_factura WHERE id_public_factura IN (${body.id.join(',')})`;
        console.log(command);
        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be delete';
        }

        return 'ok';
    }
    @Post('logic-delete')
    async logicDelete(@Body() body: Factura): Promise<string> {
        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `UPDATE public_factura SET status_eliminado=1 WHERE id_public_factura=${body.id}`;

        const output: any = {};
        await SqlHelper.run(connection, command, output);

        if (output === null) {
            return 'User could not be edited';
        }

        return 'ok';
    }
}
