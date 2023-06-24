import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/usersController';
import { HabitanteController } from './controllers/habitanteController';
import { CondominioController } from './controllers/condominioController';
import { ApartamentoController } from './controllers/apartamentoController ';
import { Tasa_diaController } from './controllers/tasa_diaController';
import { FondoReservaController } from './controllers/fondo_reservaController ';
import { ServiciosController } from './controllers/serviciosController';
import { Registro_servicioController } from './controllers/registro_servicioController';
import { GastosController } from './controllers/gastosController';
import { Registro_gastosController } from './controllers/registro_gastosController';
import { FacturaController } from './controllers/facturaController';
import { Registro_de_fondoController} from './controllers/registro_fondoController ';
import { Registro_de_pagosController } from './controllers/registro_de_pagos';
import { ParroquiasController } from './controllers/parroquiasController';
import { MunicipiosController } from './controllers/municipiosController';
import { EstadosController } from './controllers/estadosController';
import { CiudadesController } from './controllers/ciudadesController';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './common/tasks.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController, UsersController, HabitanteController, CondominioController, ApartamentoController, Tasa_diaController, FondoReservaController, ServiciosController, Registro_servicioController, GastosController, Registro_gastosController, FacturaController, Registro_de_fondoController, Registro_de_pagosController, ParroquiasController, MunicipiosController, EstadosController, CiudadesController],
  providers: [AppService, TasksService],
})
export class AppModule {}
