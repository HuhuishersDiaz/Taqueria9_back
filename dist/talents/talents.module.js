"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TalentsModule = void 0;
const common_1 = require("@nestjs/common");
const talents_controller_1 = require("./talents/talents.controller");
const talents_service_1 = require("./talents/talents.service");
let TalentsModule = class TalentsModule {
};
TalentsModule = __decorate([
    common_1.Module({
        controllers: [talents_controller_1.TalentsController],
        providers: [talents_service_1.TalentsService]
    })
], TalentsModule);
exports.TalentsModule = TalentsModule;
//# sourceMappingURL=talents.module.js.map