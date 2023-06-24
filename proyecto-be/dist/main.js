/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const usersController_1 = __webpack_require__(/*! ./controllers/usersController */ "./src/controllers/usersController.ts");
const habitanteController_1 = __webpack_require__(/*! ./controllers/habitanteController */ "./src/controllers/habitanteController.ts");
const condominioController_1 = __webpack_require__(/*! ./controllers/condominioController */ "./src/controllers/condominioController.ts");
const apartamentoController_1 = __webpack_require__(/*! ./controllers/apartamentoController  */ "./src/controllers/apartamentoController .ts");
const tasa_diaController_1 = __webpack_require__(/*! ./controllers/tasa_diaController */ "./src/controllers/tasa_diaController.ts");
const fondo_reservaController_1 = __webpack_require__(/*! ./controllers/fondo_reservaController  */ "./src/controllers/fondo_reservaController .ts");
const serviciosController_1 = __webpack_require__(/*! ./controllers/serviciosController */ "./src/controllers/serviciosController.ts");
const registro_servicioController_1 = __webpack_require__(/*! ./controllers/registro_servicioController */ "./src/controllers/registro_servicioController.ts");
const gastosController_1 = __webpack_require__(/*! ./controllers/gastosController */ "./src/controllers/gastosController.ts");
const registro_gastosController_1 = __webpack_require__(/*! ./controllers/registro_gastosController */ "./src/controllers/registro_gastosController.ts");
const facturaController_1 = __webpack_require__(/*! ./controllers/facturaController */ "./src/controllers/facturaController.ts");
const registro_fondoController_1 = __webpack_require__(/*! ./controllers/registro_fondoController  */ "./src/controllers/registro_fondoController .ts");
const registro_de_pagos_1 = __webpack_require__(/*! ./controllers/registro_de_pagos */ "./src/controllers/registro_de_pagos.ts");
const parroquiasController_1 = __webpack_require__(/*! ./controllers/parroquiasController */ "./src/controllers/parroquiasController.ts");
const municipiosController_1 = __webpack_require__(/*! ./controllers/municipiosController */ "./src/controllers/municipiosController.ts");
const estadosController_1 = __webpack_require__(/*! ./controllers/estadosController */ "./src/controllers/estadosController.ts");
const ciudadesController_1 = __webpack_require__(/*! ./controllers/ciudadesController */ "./src/controllers/ciudadesController.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const tasks_service_1 = __webpack_require__(/*! ./common/tasks.service */ "./src/common/tasks.service.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot()],
        controllers: [app_controller_1.AppController, usersController_1.UsersController, habitanteController_1.HabitanteController, condominioController_1.CondominioController, apartamentoController_1.ApartamentoController, tasa_diaController_1.Tasa_diaController, fondo_reservaController_1.FondoReservaController, serviciosController_1.ServiciosController, registro_servicioController_1.Registro_servicioController, gastosController_1.GastosController, registro_gastosController_1.Registro_gastosController, facturaController_1.FacturaController, registro_fondoController_1.Registro_de_fondoController, registro_de_pagos_1.Registro_de_pagosController, parroquiasController_1.ParroquiasController, municipiosController_1.MunicipiosController, estadosController_1.EstadosController, ciudadesController_1.CiudadesController],
        providers: [app_service_1.AppService, tasks_service_1.TasksService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return '<h1>test</h1>';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./src/common/constantes.ts":
/*!**********************************!*\
  !*** ./src/common/constantes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DB_DATABASE = exports.DB_PORT = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_HOST = void 0;
exports.DB_HOST = 'localhost';
exports.DB_USERNAME = 'root';
exports.DB_PASSWORD = '';
exports.DB_PORT = 3306;
exports.DB_DATABASE = 'proyecto_1';


/***/ }),

/***/ "./src/common/sqlHelper.entity.ts":
/*!****************************************!*\
  !*** ./src/common/sqlHelper.entity.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SqlHelper = void 0;
const mysql = __webpack_require__(/*! mysql */ "mysql");
class SqlHelper {
    static async connect(host, user, password, port, database) {
        const result = await new Promise((resolve, reject) => {
            const con = mysql.createConnection({
                host,
                user,
                password,
                port,
                database
            });
            con.connect(((err) => {
                console.log('connected');
                resolve({ con, err });
            }).bind(this));
        });
        if (result.err) {
            return null;
        }
        return result.con;
    }
    static async run(con, sql, output = {}) {
        return new Promise((resolve, reject) => {
            con.query(sql, [], (err, response) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                resolve(response);
            });
        }).then(response => {
            output.response = response;
            return response;
        }).catch(err => {
            throw err;
        });
    }
}
exports.SqlHelper = SqlHelper;


/***/ }),

/***/ "./src/common/tasks.service.ts":
/*!*************************************!*\
  !*** ./src/common/tasks.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TasksService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const cross_fetch_1 = __webpack_require__(/*! cross-fetch */ "cross-fetch");
const constantes_1 = __webpack_require__(/*! ./constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! ./sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
let TasksService = TasksService_1 = class TasksService {
    constructor() {
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async handleCron() {
        var _a;
        const res = await (0, cross_fetch_1.default)('https://us-central1-api-dolar.cloudfunctions.net/apiDolar/bcv');
        const amount = await res.json();
        const dolar = (_a = amount[0]) === null || _a === void 0 ? void 0 : _a.value;
        const today = new Date();
        const fecha = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_tasa_dia(precio_bcv, precio_dollar, fecha) VALUES (${dolar},1,'${fecha}')`;
        await sqlHelper_entity_1.SqlHelper.run(connection, command);
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "handleCron", null);
TasksService = TasksService_1 = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;


/***/ }),

/***/ "./src/controllers/apartamentoController .ts":
/*!***************************************************!*\
  !*** ./src/controllers/apartamentoController .ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApartamentoController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const apartamento_1 = __webpack_require__(/*! src/models/apartamento */ "./src/models/apartamento.ts");
let ApartamentoController = class ApartamentoController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_apartamento(numero, piso, valor, status_eliminado, id_public_habitante, id_public_condominio, creador) VALUES (${body.numero}, ${body.piso}, ${body.valor}, '${body.status_eliminado}', ${body.id_public_habitante}, ${body.id_public_condominio}, ${headers.authorization})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        connection.end();
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_apartamento SET numero=${body.numero}, piso=${body.piso}, valor=${body.valor}, status_eliminado='${body.status_eliminado}', id_public_habitante=${body.id_public_habitante}, id_public_condominio=${body.id_public_condominio} WHERE id_public_apartamento=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        connection.end();
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async logicDelete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_apartamento SET status_eliminado=2 WHERE id_public_apartamento=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        connection.end();
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_apartamento as id FROM public_apartamento WHERE id_public_apartamento=${id}`, output);
        connection.end();
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        console.log(headers);
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_apartamento WHERE public_apartamento.status_eliminado != 2 AND public_apartamento.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, public_condominio.nombre as condominio_nombre, id_public_apartamento as id FROM public_apartamento LEFT JOIN public_condominio on public_apartamento.id_public_condominio=public_condominio.id_public_condominio WHERE public_apartamento.status_eliminado != 2 AND public_apartamento.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        connection.end();
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_apartamento WHERE id_public_apartamento IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        connection.end();
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof apartamento_1.Apartamento !== "undefined" && apartamento_1.Apartamento) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ApartamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof apartamento_1.Apartamento !== "undefined" && apartamento_1.Apartamento) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ApartamentoController.prototype, "edit", null);
__decorate([
    (0, common_1.Post)('logic-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof apartamento_1.Apartamento !== "undefined" && apartamento_1.Apartamento) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ApartamentoController.prototype, "logicDelete", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ApartamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ApartamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ApartamentoController.prototype, "delete", null);
ApartamentoController = __decorate([
    (0, common_1.Controller)('apartamento')
], ApartamentoController);
exports.ApartamentoController = ApartamentoController;


/***/ }),

/***/ "./src/controllers/ciudadesController.ts":
/*!***********************************************!*\
  !*** ./src/controllers/ciudadesController.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CiudadesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
let CiudadesController = class CiudadesController {
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM ciudades WHERE id_ciudad=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM ciudades`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_ciudad as id FROM ciudades LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CiudadesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CiudadesController.prototype, "findAll", null);
CiudadesController = __decorate([
    (0, common_1.Controller)('ciudades')
], CiudadesController);
exports.CiudadesController = CiudadesController;


/***/ }),

/***/ "./src/controllers/condominioController.ts":
/*!*************************************************!*\
  !*** ./src/controllers/condominioController.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CondominioController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const condominio_1 = __webpack_require__(/*! src/models/condominio */ "./src/models/condominio.ts");
let CondominioController = class CondominioController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_condominio(rif, nombre, cantidad_apartamento, numero_pisos, valor, status_eliminado, id_public_fondo_reserva, id_public_users, public_estado_id, public_ciudad_id, public_municipio_id, public_parroquia_id, creador) VALUES (${body.rif},'${body.nombre}', ${body.cantidad_apartamento}, ${body.numero_pisos}, ${body.valor},'${body.status_eliminado}', ${body.id_public_fondo_reserva || null}, ${body.id_public_users || null}, ${body.public_estado_id || null}, ${body.public_ciudad_id || null}, ${body.public_municipio_id || null}, ${body.public_parroquia_id || null}, ${headers.authorization})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_condominio SET cantidad_apartamento=${body.cantidad_apartamento}, rif=${body.rif}, nombre='${body.nombre}', numero_pisos=${body.numero_pisos}, valor=${body.valor}, status_eliminado='${body.status_eliminado}', public_estado_id=${body.public_estado_id},public_ciudad_id=${body.public_ciudad_id},public_municipio_id=${body.public_municipio_id},public_parroquia_id=${body.public_parroquia_id}, id_public_fondo_reserva=${body.id_public_fondo_reserva}, id_public_users=${body.id_public_users} WHERE id_public_condominio=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_condominio as id FROM public_condominio WHERE id_public_condominio=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_condominio WHERE public_condominio.status_eliminado != 2 AND public_condominio.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_condominio as id FROM public_condominio WHERE public_condominio.status_eliminado != 2 AND public_condominio.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_condominio WHERE id_public_condominio IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
    async logicDelete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_condominio SET status_eliminado=2 WHERE id_public_condominio=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof condominio_1.Condominio !== "undefined" && condominio_1.Condominio) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CondominioController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof condominio_1.Condominio !== "undefined" && condominio_1.Condominio) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CondominioController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CondominioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], CondominioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CondominioController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('logic-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof condominio_1.Condominio !== "undefined" && condominio_1.Condominio) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CondominioController.prototype, "logicDelete", null);
CondominioController = __decorate([
    (0, common_1.Controller)('condominio')
], CondominioController);
exports.CondominioController = CondominioController;


/***/ }),

/***/ "./src/controllers/estadosController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/estadosController.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EstadosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
let EstadosController = class EstadosController {
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM estados WHERE id_estado=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM estados`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_estado as id FROM estados LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], EstadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], EstadosController.prototype, "findAll", null);
EstadosController = __decorate([
    (0, common_1.Controller)('estados')
], EstadosController);
exports.EstadosController = EstadosController;


/***/ }),

/***/ "./src/controllers/facturaController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/facturaController.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FacturaController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const factura_1 = __webpack_require__(/*! src/models/factura */ "./src/models/factura.ts");
let FacturaController = class FacturaController {
    async create(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_factura(total, iva, descuento, , status_eliminado, id_public_servicios, id_public_condominio) VALUES (${body.total}, ${body.iva}, ${body.descuento},${body.status_eliminado}', ${body.id_public_servicios}, ${body.id_public_condominio}, ${body.id_public_gastos})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_factura SET total=${body.total}, iva=${body.iva}, descuento=${body.descuento}, status_eliminado='${body.status_eliminado}', id_public_servicios=${body.id_public_servicios}, id_public_condominio=${body.id_public_condominio}, id_public_gastos=${body.id_public_gastos} WHERE id_public_factura=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM public_factura WHERE id_public_factura=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_factura`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_factura as id FROM public_factura WHERE public_factura.status_eliminado != 1 LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_factura WHERE id_public_factura IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
    async logicDelete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_factura SET status_eliminado=1 WHERE id_public_factura=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof factura_1.Factura !== "undefined" && factura_1.Factura) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], FacturaController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof factura_1.Factura !== "undefined" && factura_1.Factura) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], FacturaController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], FacturaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], FacturaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], FacturaController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('logic-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof factura_1.Factura !== "undefined" && factura_1.Factura) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], FacturaController.prototype, "logicDelete", null);
FacturaController = __decorate([
    (0, common_1.Controller)('factura')
], FacturaController);
exports.FacturaController = FacturaController;


/***/ }),

/***/ "./src/controllers/fondo_reservaController .ts":
/*!*****************************************************!*\
  !*** ./src/controllers/fondo_reservaController .ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FondoReservaController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const fondo_reserva_1 = __webpack_require__(/*! src/models/fondo_reserva */ "./src/models/fondo_reserva.ts");
let FondoReservaController = class FondoReservaController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_fondo_reserva(monto_bs, ingreso_bs, egreso_bs, monto_dollar, ingreso_dollar, egreso_dollar, status_eliminado, creador ) VALUES (${body.monto_bs || 0}, ${body.ingreso_bs || 0}, ${body.egreso_bs || 0}, ${body.monto_dollar || 0}, ${body.egreso_dollar || 0}, ${body.ingreso_dollar || 0},'${body.status_eliminado || null}', ${headers.authorization})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_fondo_reserva SET monto_bs=${body.monto_bs || 0}, ingreso_bs=${body.ingreso_bs || 0}, egreso_bs=${body.egreso_bs || 0}, monto_dollar=${body.monto_dollar || 0}, ingreso_dollar=${body.ingreso_dollar || 0}, egreso_dollar=${body.egreso_dollar || 0}, status_eliminado='${body.status_eliminado || null}' WHERE id_public_fondo_reserva=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_fondo_reserva as id FROM public_fondo_reserva WHERE id_public_fondo_reserva=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_fondo_reserva WHERE public_fondo_reserva.status_eliminado != 2 AND public_fondo_reserva.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_fondo_reserva as id FROM public_fondo_reserva WHERE public_fondo_reserva.status_eliminado != 2 AND public_fondo_reserva.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_fondo_reserva WHERE id_public_fondo_reserva IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
    async logicDelete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_fondo_reserva SET status_eliminado=2 WHERE id_public_fondo_reserva=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof fondo_reserva_1.FondoReserva !== "undefined" && fondo_reserva_1.FondoReserva) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], FondoReservaController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof fondo_reserva_1.FondoReserva !== "undefined" && fondo_reserva_1.FondoReserva) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], FondoReservaController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], FondoReservaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], FondoReservaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], FondoReservaController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('logic-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof fondo_reserva_1.FondoReserva !== "undefined" && fondo_reserva_1.FondoReserva) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], FondoReservaController.prototype, "logicDelete", null);
FondoReservaController = __decorate([
    (0, common_1.Controller)('fondo_reserva')
], FondoReservaController);
exports.FondoReservaController = FondoReservaController;


/***/ }),

/***/ "./src/controllers/gastosController.ts":
/*!*********************************************!*\
  !*** ./src/controllers/gastosController.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GastosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const gastos_1 = __webpack_require__(/*! src/models/gastos */ "./src/models/gastos.ts");
let GastosController = class GastosController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_gastos(nombre, fecha, monto, status_eliminado, id_public_condominio, id_public_registro_gastos, creador) VALUES ('${body.nombre}', ${body.fecha}, ${body.monto},'${body.status_eliminado}', ${body.id_public_condominio}, ${body.id_public_registro_gastos}, ${headers.authorization})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_gastos SET nombre='${body.nombre}', fecha=${body.fecha}, monto=${body.monto}, status_eliminado='${body.status_eliminado}', id_public_condominio='${body.id_public_condominio}', id_public_registro_gastos=${body.id_public_registro_gastos} WHERE id_public_gastos=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_gastos as id FROM public_gastos WHERE id_public_gastos=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_gastos WHERE public_gastos.status_eliminado != 2 AND public_gastos.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_gastos as id FROM public_gastos WHERE public_gastos.status_eliminado != 2 AND public_gastos.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_gastos WHERE id_public_gastos IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof gastos_1.Gastos !== "undefined" && gastos_1.Gastos) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], GastosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof gastos_1.Gastos !== "undefined" && gastos_1.Gastos) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], GastosController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], GastosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], GastosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], GastosController.prototype, "delete", null);
GastosController = __decorate([
    (0, common_1.Controller)('gastos')
], GastosController);
exports.GastosController = GastosController;


/***/ }),

/***/ "./src/controllers/habitanteController.ts":
/*!************************************************!*\
  !*** ./src/controllers/habitanteController.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HabitanteController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const habitante_1 = __webpack_require__(/*! src/models/habitante */ "./src/models/habitante.ts");
let HabitanteController = class HabitanteController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_habitante(nombre, apellido, tipo_cedula, cedula, correo, telefono, linea_telefono, status_eliminado, status, password, username, creador) VALUES ('${body.nombre}', '${body.apellido}', '${body.tipo_cedula}', ${body.cedula}, '${body.correo || ''}', ${body.telefono || null}, '${body.linea_telefono}','${body.status || null}', '${body.status || null}', '${body.password || null}','${body.username || null}', ${headers.authorization})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_habitante SET nombre='${body.nombre}', apellido='${body.apellido}', tipo_cedula='${body.tipo_cedula}', cedula=${body.cedula}, correo='${body.correo || ''}', telefono=${body.telefono}, linea_telefono='${body.linea_telefono}', status_eliminado='${body.status_eliminado}', status='${body.status}', password='${body.password}', username='${body.username}' WHERE id_public_habitante=${body.id}`;
        console.log(command, body);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_habitante as id FROM public_habitante WHERE id_public_habitante=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_habitante WHERE public_habitante.status_eliminado != 2 AND public_habitante.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, public_habitante.id_public_habitante as id, a.piso, a.numero, a.id_public_condominio FROM public_habitante LEFT JOIN public_apartamento as a ON a.id_public_habitante=public_habitante.id_public_habitante WHERE public_habitante.status_eliminado != 2 AND public_habitante.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_habitante WHERE id_public_habitante IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
    async logicDelete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_habitante SET status_eliminado=2 WHERE id_public_habitante=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof habitante_1.Habitante !== "undefined" && habitante_1.Habitante) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], HabitanteController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof habitante_1.Habitante !== "undefined" && habitante_1.Habitante) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], HabitanteController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], HabitanteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], HabitanteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], HabitanteController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('logic-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof habitante_1.Habitante !== "undefined" && habitante_1.Habitante) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], HabitanteController.prototype, "logicDelete", null);
HabitanteController = __decorate([
    (0, common_1.Controller)('habitante')
], HabitanteController);
exports.HabitanteController = HabitanteController;


/***/ }),

/***/ "./src/controllers/municipiosController.ts":
/*!*************************************************!*\
  !*** ./src/controllers/municipiosController.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipiosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
let MunicipiosController = class MunicipiosController {
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM municipios WHERE id_municipio=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM municipios`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_municipio as id FROM municipios LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], MunicipiosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MunicipiosController.prototype, "findAll", null);
MunicipiosController = __decorate([
    (0, common_1.Controller)('municipios')
], MunicipiosController);
exports.MunicipiosController = MunicipiosController;


/***/ }),

/***/ "./src/controllers/parroquiasController.ts":
/*!*************************************************!*\
  !*** ./src/controllers/parroquiasController.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParroquiasController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
let ParroquiasController = class ParroquiasController {
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM parroquias WHERE id_parroquia=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM parroquias`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_parroquia as id FROM parroquias LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ParroquiasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ParroquiasController.prototype, "findAll", null);
ParroquiasController = __decorate([
    (0, common_1.Controller)('parroquias')
], ParroquiasController);
exports.ParroquiasController = ParroquiasController;


/***/ }),

/***/ "./src/controllers/registro_de_pagos.ts":
/*!**********************************************!*\
  !*** ./src/controllers/registro_de_pagos.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_de_pagosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const registro_de_pagos_1 = __webpack_require__(/*! src/models/registro_de_pagos */ "./src/models/registro_de_pagos.ts");
let Registro_de_pagosController = class Registro_de_pagosController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_registro_de_pagos(monto_bs, tipo, monto_dollar, fecha, concepto, banco, status_eliminado, id_public_apartamento, id_public_tasa_dia , id_public_factura, id_public_habitante, creador) VALUES (${body.monto_bs},'${body.tipo}',${body.monto_dollar}, '${body.fecha || null}','${body.concepto}', '${body.banco}','${body.status_eliminado}', ${body.id_public_apartamento || null}, ${body.id_public_tasa_dia || null}, ${body.id_public_factura || null}, ${body.id_public_habitante || null}, ${headers.authorization})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        let fondoReserva = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT r.* FROM public_condominio as c LEFT JOIN public_apartamento as h ON c.id_public_condominio=h.id_public_condominio LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE h.id_public_apartamento=${body.id_public_apartamento}`, fondoReserva);
        fondoReserva = fondoReserva === null || fondoReserva === void 0 ? void 0 : fondoReserva.response[0];
        if (fondoReserva) {
            const ingresoDollar = fondoReserva.ingreso_dollar + parseInt(`${body.monto_dollar}`);
            const montoDollar = fondoReserva.monto_dollar + body.monto_dollar;
            const ingresoBs = fondoReserva.ingreso_bs + body.monto_bs;
            const montoBs = fondoReserva.monto_bs + body.monto_bs;
            await sqlHelper_entity_1.SqlHelper.run(connection, `UPDATE public_fondo_reserva SET ingreso_dollar=${ingresoDollar}, monto_dollar=${montoDollar}, ingreso_bs=${ingresoBs}, monto_bs=${montoBs} WHERE public_fondo_reserva.id_public_fondo_reserva=${fondoReserva.id_public_fondo_reserva}`);
        }
        await sqlHelper_entity_1.SqlHelper.run(connection, `UPDATE public_habitante SET ultimo_pago='${body.fecha}' WHERE id_public_habitante=${body.id_public_habitante}`);
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_registro_de_pagos SET monto_bs=${body.monto_bs}, monto_dollar=${body.monto_dollar}, tipo='${body.tipo}', fecha='${body.fecha}', concepto='${body.concepto}', banco='${body.banco}', status_eliminado='${body.status_eliminado}', id_public_apartamento=${body.id_public_apartamento || null}, id_public_tasa_dia=${body.id_public_tasa_dia || null}, id_public_factura=${body.id_public_factura || null}, id_public_habitante=${body.id_public_habitante || null} WHERE id_public_registro_de_pagos=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * , id_public_registro_de_pagos as id FROM  public_registro_de_pagos WHERE id_public_registro_de_pagos=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_registro_de_pagos WHERE public_registro_de_pagos.status_eliminado != 2 AND public_registro_de_pagos.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_registro_de_pagos as id FROM public_registro_de_pagos WHERE public_registro_de_pagos.status_eliminado != 2 AND public_registro_de_pagos.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_registro_de_pagos WHERE id_public_registro_de_pagos IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof registro_de_pagos_1.Registro_de_pagos !== "undefined" && registro_de_pagos_1.Registro_de_pagos) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], Registro_de_pagosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof registro_de_pagos_1.Registro_de_pagos !== "undefined" && registro_de_pagos_1.Registro_de_pagos) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], Registro_de_pagosController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], Registro_de_pagosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], Registro_de_pagosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], Registro_de_pagosController.prototype, "delete", null);
Registro_de_pagosController = __decorate([
    (0, common_1.Controller)('registro_de_pagos')
], Registro_de_pagosController);
exports.Registro_de_pagosController = Registro_de_pagosController;


/***/ }),

/***/ "./src/controllers/registro_fondoController .ts":
/*!******************************************************!*\
  !*** ./src/controllers/registro_fondoController .ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_de_fondoController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const registro_de_fondo_1 = __webpack_require__(/*! src/models/registro_de_fondo */ "./src/models/registro_de_fondo.ts");
let Registro_de_fondoController = class Registro_de_fondoController {
    async create(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_registro_de_fondo(monto_bs, monto_dollar, status_eliminado, fondo_reserva_id ) VALUES (${body.monto_bs}, ${body.monto_dollar},'${body.status_eliminado}', ${body.fondo_reserva_id})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_registro_de_fondo SET monto_bs=${body.monto_bs}, monto_dollar=${body.monto_dollar}, status_eliminado='${body.status_eliminado}', fondo_reserva_id=${body.fondo_reserva_id} WHERE id=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM public_registro_de_fondo WHERE id=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_registro_de_fondo`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM public_registro_de_fondo LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_registro_de_fondo WHERE id IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof registro_de_fondo_1.Registro_de_fondo !== "undefined" && registro_de_fondo_1.Registro_de_fondo) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], Registro_de_fondoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof registro_de_fondo_1.Registro_de_fondo !== "undefined" && registro_de_fondo_1.Registro_de_fondo) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], Registro_de_fondoController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], Registro_de_fondoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], Registro_de_fondoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], Registro_de_fondoController.prototype, "delete", null);
Registro_de_fondoController = __decorate([
    (0, common_1.Controller)('registro_de_fondo')
], Registro_de_fondoController);
exports.Registro_de_fondoController = Registro_de_fondoController;


/***/ }),

/***/ "./src/controllers/registro_gastosController.ts":
/*!******************************************************!*\
  !*** ./src/controllers/registro_gastosController.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_gastosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const registro_gastos_1 = __webpack_require__(/*! src/models/registro_gastos */ "./src/models/registro_gastos.ts");
let Registro_gastosController = class Registro_gastosController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_registro_gastos(nombre, monto, fecha, status, cancelado_bs, cancelado_dollar, status_eliminado, id_tasa_dia, id_public_condominio, creador) VALUES ('${body.nombre}', ${body.monto}, '${body.fecha}', '${body.status || null}', ${body.cancelado_bs || null}, ${body.cancelado_dollar || null},'${body.status_eliminado || null}', ${body.id_tasa_dia || null},${body.id_public_condominio || null}, ${headers.authorization})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const lastRegistro = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_registro_gastos as id FROM public_registro_gastos WHERE id_public_registro_gastos=${body.id}`, lastRegistro);
        let applyRegistro = false;
        if (lastRegistro.status !== 'Pagado' && body.status === 'Pagado') {
            applyRegistro = true;
        }
        let command = `UPDATE public_registro_gastos SET monto=${body.monto}, nombre='${body.nombre}', fecha='${body.fecha}', status='${body.status || null}', cancelado_bs=${body.cancelado_bs || null},cancelado_dollar=${body.cancelado_dollar || null}, status_eliminado='${body.status_eliminado || null}', id_tasa_dia=${body.id_tasa_dia || null}, id_public_condominio=${body.id_public_condominio || null} WHERE id_public_registro_gastos=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        if (applyRegistro) {
            console.log(`SELECT * FROM public_condominio as c LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE c.id_public_condominio=${body.id_public_condominio}`);
            let fondoReserva = {};
            await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT r.* FROM public_condominio as c LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE c.id_public_condominio=${body.id_public_condominio}`, fondoReserva);
            fondoReserva = fondoReserva.response[0];
            const egresoDollar = fondoReserva.egreso_dollar + parseInt(`${body.cancelado_dollar}`);
            const montoDollar = fondoReserva.monto_dollar - body.cancelado_dollar;
            const egresoBs = fondoReserva.egreso_bs + body.cancelado_bs;
            const montoBs = fondoReserva.monto_bs - body.cancelado_bs;
            await sqlHelper_entity_1.SqlHelper.run(connection, `UPDATE public_fondo_reserva SET egreso_dollar=${egresoDollar}, monto_dollar=${montoDollar}, egreso_bs=${egresoBs}, monto_bs=${montoBs} WHERE public_fondo_reserva.id_public_fondo_reserva=${fondoReserva.id_public_fondo_reserva}`);
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_registro_gastos as id FROM public_registro_gastos WHERE id_public_registro_gastos=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_registro_gastos WHERE public_registro_gastos.status_eliminado != 2 AND public_registro_gastos.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_registro_gastos as id FROM public_registro_gastos WHERE public_registro_gastos.status_eliminado != 2 AND public_registro_gastos.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_registro_gastos WHERE id_public_registro_gastos IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof registro_gastos_1.Registro_gastos !== "undefined" && registro_gastos_1.Registro_gastos) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], Registro_gastosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof registro_gastos_1.Registro_gastos !== "undefined" && registro_gastos_1.Registro_gastos) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], Registro_gastosController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], Registro_gastosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], Registro_gastosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], Registro_gastosController.prototype, "delete", null);
Registro_gastosController = __decorate([
    (0, common_1.Controller)('registro_gastos')
], Registro_gastosController);
exports.Registro_gastosController = Registro_gastosController;


/***/ }),

/***/ "./src/controllers/registro_servicioController.ts":
/*!********************************************************!*\
  !*** ./src/controllers/registro_servicioController.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_servicioController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const registro_servicio_1 = __webpack_require__(/*! src/models/registro_servicio */ "./src/models/registro_servicio.ts");
let Registro_servicioController = class Registro_servicioController {
    async create(body, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_registro_servicio(nombre, monto, fecha, status, cancelado_bs, cancelado_dollar, status_eliminado, id_tasa_dia, id_public_condominio, creador) VALUES ('${body.nombre}', ${body.monto}, '${body.fecha}', '${body.status}', ${body.cancelado_bs || null}, ${body.cancelado_dollar || null},'${body.status_eliminado || null}', ${body.id_tasa_dia || null}, ${body.id_public_condominio || null}, ${headers.authorization})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const lastRegistro = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_registro_servicio as id FROM public_registro_servicio WHERE id_public_registro_servicio=${body.id}`, lastRegistro);
        let applyRegistro = false;
        if (lastRegistro.status !== 'Pagado' && body.status === 'Pagado') {
            applyRegistro = true;
        }
        let command = `UPDATE public_registro_servicio SET monto=${body.monto}, nombre='${body.nombre}', fecha='${body.fecha}', status='${body.status}', cancelado_bs=${body.cancelado_bs || null},cancelado_dollar=${body.cancelado_dollar || null}, status_eliminado='${body.status_eliminado || null}', id_tasa_dia=${body.id_tasa_dia || null}, id_public_condominio=${body.id_public_condominio || null} WHERE id_public_registro_servicio=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        if (applyRegistro) {
            console.log(`SELECT * FROM public_condominio as c LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE c.id_public_condominio=${body.id_public_condominio}`);
            let fondoReserva = {};
            await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT r.* FROM public_condominio as c LEFT JOIN public_fondo_reserva as r ON c.id_public_fondo_reserva=r.id_public_fondo_reserva WHERE c.id_public_condominio=${body.id_public_condominio}`, fondoReserva);
            fondoReserva = fondoReserva.response[0];
            const egresoDollar = fondoReserva.egreso_dollar + parseInt(`${body.cancelado_dollar}`);
            const montoDollar = fondoReserva.monto_dollar - body.cancelado_dollar;
            const egresoBs = fondoReserva.egreso_bs + body.cancelado_bs;
            const montoBs = fondoReserva.monto_bs - body.cancelado_bs;
            await sqlHelper_entity_1.SqlHelper.run(connection, `UPDATE public_fondo_reserva SET egreso_dollar=${egresoDollar}, monto_dollar=${montoDollar}, egreso_bs=${egresoBs}, monto_bs=${montoBs} WHERE public_fondo_reserva.id_public_fondo_reserva=${fondoReserva.id_public_fondo_reserva}`);
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_registro_servicio as id FROM public_registro_servicio WHERE id_public_registro_servicio=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize, headers) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_registro_servicio WHERE public_registro_servicio.status_eliminado != 2 AND public_registro_servicio.creador=${headers.authorization}`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_registro_servicio as id FROM public_registro_servicio WHERE public_registro_servicio.status_eliminado != 2 AND public_registro_servicio.creador=${headers.authorization} LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_registro_servicio WHERE id_public_registro_servicio IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof registro_servicio_1.Registro_servicio !== "undefined" && registro_servicio_1.Registro_servicio) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], Registro_servicioController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof registro_servicio_1.Registro_servicio !== "undefined" && registro_servicio_1.Registro_servicio) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], Registro_servicioController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], Registro_servicioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], Registro_servicioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], Registro_servicioController.prototype, "delete", null);
Registro_servicioController = __decorate([
    (0, common_1.Controller)('registro_servicio')
], Registro_servicioController);
exports.Registro_servicioController = Registro_servicioController;


/***/ }),

/***/ "./src/controllers/serviciosController.ts":
/*!************************************************!*\
  !*** ./src/controllers/serviciosController.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiciosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const servicios_1 = __webpack_require__(/*! src/models/servicios */ "./src/models/servicios.ts");
let ServiciosController = class ServiciosController {
    async create(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_servicios(nombre, fecha, monto, status_eliminado, id_public_condominio, id_public_registro_servicio) VALUES ('${body.nombre}', ${body.fecha}, ${body.monto},'${body.status_eliminado}', ${body.id_public_condominio}, ${body.id_public_registro_servicio})`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_servicios SET nombre='${body.nombre}', fecha=${body.fecha}, monto=${body.monto}, status_eliminado='${body.status_eliminado}', id_public_condominio='${body.id_public_condominio}', id_public_registro_servicio=${body.id_public_registro_servicio} WHERE id_public_servicios=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM public_servicios WHERE id_public_servicios=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_servicios`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM public_servicios LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_servicios WHERE id_public_servicios IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof servicios_1.Servicios !== "undefined" && servicios_1.Servicios) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ServiciosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof servicios_1.Servicios !== "undefined" && servicios_1.Servicios) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ServiciosController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ServiciosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ServiciosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ServiciosController.prototype, "delete", null);
ServiciosController = __decorate([
    (0, common_1.Controller)('servicios')
], ServiciosController);
exports.ServiciosController = ServiciosController;


/***/ }),

/***/ "./src/controllers/tasa_diaController.ts":
/*!***********************************************!*\
  !*** ./src/controllers/tasa_diaController.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tasa_diaController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const tasa_dia_1 = __webpack_require__(/*! src/models/tasa_dia */ "./src/models/tasa_dia.ts");
let Tasa_diaController = class Tasa_diaController {
    async create(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_tasa_dia(precio_bcv, precio_dollar, fecha, status_eliminado) VALUES (${body.precio_bcv}, ${body.precio_dollar}, ${body.fecha}, '${body.status_eliminado}')`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_tasa_dia SET precio_bcv=${body.precio_bcv}, precio_dollar=${body.precio_dollar}, fecha=${body.fecha}, status_eliminado='${body.status_eliminado}' WHERE id_tasa_dia=${body.id}`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM public_tasa_dia WHERE id_public_tasa_dia=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_tasa_dia`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT * FROM public_tasa_dia LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_tasa_dia WHERE id_public_tasa_dia IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof tasa_dia_1.Tasa_dia !== "undefined" && tasa_dia_1.Tasa_dia) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], Tasa_diaController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof tasa_dia_1.Tasa_dia !== "undefined" && tasa_dia_1.Tasa_dia) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], Tasa_diaController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], Tasa_diaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], Tasa_diaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], Tasa_diaController.prototype, "delete", null);
Tasa_diaController = __decorate([
    (0, common_1.Controller)('tasa_dia')
], Tasa_diaController);
exports.Tasa_diaController = Tasa_diaController;


/***/ }),

/***/ "./src/controllers/usersController.ts":
/*!********************************************!*\
  !*** ./src/controllers/usersController.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constantes_1 = __webpack_require__(/*! src/common/constantes */ "./src/common/constantes.ts");
const sqlHelper_entity_1 = __webpack_require__(/*! src/common/sqlHelper.entity */ "./src/common/sqlHelper.entity.ts");
const users_1 = __webpack_require__(/*! src/models/users */ "./src/models/users.ts");
let UsersController = class UsersController {
    async create(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `INSERT INTO public_users(username, password, nombre, apellido, status_eliminado) VALUES ('${body.username}', '${body.password}', '${body.nombre}', '${body.apellido}', '${body.status_eliminado || 'Existente'}')`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be created';
        }
        return output.response.insertId;
    }
    async edit(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_users SET password='${body.password}', username='${body.username}', nombre='${body.nombre}', apellido='${body.apellido}', status_eliminado='${body.status_eliminado || 'Existente'}' WHERE id_public_users=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
    async findOne(id) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_users as id FROM public_users WHERE id_public_users=${id}`, output);
        if (output === null) {
            return 'Query could not be executed';
        }
        return output;
    }
    async login(body) {
        var _a, _b;
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_users as id FROM public_users WHERE username='${body.username || ''}' AND password='${body.password || ''}'`, output);
        if (!((_a = output === null || output === void 0 ? void 0 : output.response) === null || _a === void 0 ? void 0 : _a.length)) {
            await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, public_habitante.id_public_habitante as id, a.piso, a.numero, c.nombre as condominio FROM public_habitante LEFT JOIN public_apartamento as a ON a.id_public_habitante=public_habitante.id_public_habitante LEFT JOIN public_condominio as c ON a.id_public_condominio=c.id_public_condominio WHERE public_habitante.username='${body.username || ''}' AND public_habitante.password='${body.password || ''}'`, output);
            if ((_b = output === null || output === void 0 ? void 0 : output.response) === null || _b === void 0 ? void 0 : _b.length) {
                output.response[0].tipo = "habitante";
            }
        }
        else {
            output.response[0].tipo = "operador";
        }
        return (output === null || output === void 0 ? void 0 : output.response) ? output === null || output === void 0 ? void 0 : output.response[0] : null;
    }
    async findAll(pageNumber, pageSize) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        const count = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT COUNT(*) FROM public_users WHERE public_users.status_eliminado != 2`, count);
        const items = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, `SELECT *, id_public_users as id FROM public_users WHERE public_users.status_eliminado != 2 LIMIT ${pageNumber * pageSize}, ${pageSize}`, items);
        if (items === null) {
            return 'Query could not be executed';
        }
        return { items: items.response, count: count.response[0]['COUNT(*)'] };
    }
    async delete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `DELETE FROM public_users WHERE id_public_users IN (${body.id.join(',')})`;
        console.log(command);
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be delete';
        }
        return 'ok';
    }
    async logicDelete(body) {
        let connection = await sqlHelper_entity_1.SqlHelper.connect(constantes_1.DB_HOST, constantes_1.DB_USERNAME, constantes_1.DB_PASSWORD, constantes_1.DB_PORT, constantes_1.DB_DATABASE);
        let command = `UPDATE public_users SET status_eliminado=2 WHERE id_public_users=${body.id}`;
        const output = {};
        await sqlHelper_entity_1.SqlHelper.run(connection, command, output);
        if (output === null) {
            return 'User could not be edited';
        }
        return 'ok';
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof users_1.Users !== "undefined" && users_1.Users) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof users_1.Users !== "undefined" && users_1.Users) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('view'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('pageNumber')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('logic-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof users_1.Users !== "undefined" && users_1.Users) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], UsersController.prototype, "logicDelete", null);
UsersController = __decorate([
    (0, common_1.Controller)('users')
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./src/models/apartamento.ts":
/*!***********************************!*\
  !*** ./src/models/apartamento.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Apartamento = void 0;
class Apartamento {
}
exports.Apartamento = Apartamento;


/***/ }),

/***/ "./src/models/condominio.ts":
/*!**********************************!*\
  !*** ./src/models/condominio.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Condominio = void 0;
class Condominio {
}
exports.Condominio = Condominio;


/***/ }),

/***/ "./src/models/factura.ts":
/*!*******************************!*\
  !*** ./src/models/factura.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Factura = void 0;
class Factura {
}
exports.Factura = Factura;


/***/ }),

/***/ "./src/models/fondo_reserva.ts":
/*!*************************************!*\
  !*** ./src/models/fondo_reserva.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FondoReserva = void 0;
class FondoReserva {
}
exports.FondoReserva = FondoReserva;


/***/ }),

/***/ "./src/models/gastos.ts":
/*!******************************!*\
  !*** ./src/models/gastos.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gastos = void 0;
class Gastos {
}
exports.Gastos = Gastos;


/***/ }),

/***/ "./src/models/habitante.ts":
/*!*********************************!*\
  !*** ./src/models/habitante.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Habitante = void 0;
class Habitante {
}
exports.Habitante = Habitante;


/***/ }),

/***/ "./src/models/registro_de_fondo.ts":
/*!*****************************************!*\
  !*** ./src/models/registro_de_fondo.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_de_fondo = void 0;
class Registro_de_fondo {
}
exports.Registro_de_fondo = Registro_de_fondo;


/***/ }),

/***/ "./src/models/registro_de_pagos.ts":
/*!*****************************************!*\
  !*** ./src/models/registro_de_pagos.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_de_pagos = void 0;
class Registro_de_pagos {
}
exports.Registro_de_pagos = Registro_de_pagos;


/***/ }),

/***/ "./src/models/registro_gastos.ts":
/*!***************************************!*\
  !*** ./src/models/registro_gastos.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_gastos = void 0;
class Registro_gastos {
}
exports.Registro_gastos = Registro_gastos;


/***/ }),

/***/ "./src/models/registro_servicio.ts":
/*!*****************************************!*\
  !*** ./src/models/registro_servicio.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro_servicio = void 0;
class Registro_servicio {
}
exports.Registro_servicio = Registro_servicio;


/***/ }),

/***/ "./src/models/servicios.ts":
/*!*********************************!*\
  !*** ./src/models/servicios.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Servicios = void 0;
class Servicios {
}
exports.Servicios = Servicios;


/***/ }),

/***/ "./src/models/tasa_dia.ts":
/*!********************************!*\
  !*** ./src/models/tasa_dia.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tasa_dia = void 0;
class Tasa_dia {
}
exports.Tasa_dia = Tasa_dia;


/***/ }),

/***/ "./src/models/users.ts":
/*!*****************************!*\
  !*** ./src/models/users.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Users = void 0;
class Users {
}
exports.Users = Users;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET, PUT, POST, DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;