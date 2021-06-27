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
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const products_module_1 = require("./products/products.module");
const devices_module_1 = require("./devices/devices.module");
const talents_module_1 = require("./talents/talents.module");
const members_module_1 = require("./members/members.module");
const login_module_1 = require("./login/login.module");
const services_module_1 = require("./services/services.module");
const transf_module_1 = require("./transf/transf.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule, products_module_1.ProductsModule,
            mongoose_1.MongooseModule.forRoot("mongodb://localhost:27017/enginedb", { useFindAndModify: false }),
            devices_module_1.DevicesModule,
            members_module_1.MembersModule,
            talents_module_1.TalentsModule,
            login_module_1.LoginModule,
            services_module_1.ServicesModule,
            transf_module_1.TransfModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map