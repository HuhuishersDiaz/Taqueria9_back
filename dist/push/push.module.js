"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushModule = void 0;
const common_1 = require("@nestjs/common");
const push_controller_1 = require("./push.controller");
const push_service_1 = require("./push.service");
let PushModule = class PushModule {
};
PushModule = __decorate([
    common_1.Module({
        controllers: [push_controller_1.PushController],
        providers: [push_service_1.PushService]
    })
], PushModule);
exports.PushModule = PushModule;
//# sourceMappingURL=push.module.js.map