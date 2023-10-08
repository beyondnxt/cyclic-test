"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const mongoose_1 = require("@nestjs/mongoose");
const app_service_1 = require("./app.service");
const student_schema_1 = require("./schema/student.schema");
const order_schema_1 = require("./schema/order.schema");
const student_service_1 = require("./student/student.service");
const student_controller_1 = require("./student/student.controller");
const order_controller_1 = require("./order/order.controller");
const order_service_1 = require("./order/order.service");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://beyondnxt:cuberex99@cluster0.fu5reg0.mongodb.net/', { dbName: 'nestdb' }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'student', schema: student_schema_1.StudentSchema },
                { name: 'order', schema: order_schema_1.OrderSchema },
            ]),
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env'],
                isGlobal: true,
                cache: true,
            }),
        ],
        controllers: [app_controller_1.AppController, student_controller_1.StudentController, order_controller_1.OrderController],
        providers: [app_service_1.AppService, student_service_1.StudentService, order_service_1.OrderService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map