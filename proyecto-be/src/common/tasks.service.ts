import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import fetch from 'cross-fetch';
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE } from './constantes';
import { SqlHelper } from './sqlHelper.entity';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    @Cron(CronExpression.EVERY_HOUR)
    async handleCron() {
        const res = await fetch('https://us-central1-api-dolar.cloudfunctions.net/apiDolar/bcv');
        const amount = await res.json();
        const dolar = amount[0]?.value;
        const today = new Date();
        const fecha = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

        let connection = await SqlHelper.connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE);
        let command: string = `INSERT INTO public_tasa_dia(precio_bcv, precio_dollar, fecha) VALUES (${dolar},1,'${fecha}')`;
        
        await SqlHelper.run(connection, command);
    }
}
