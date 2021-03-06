"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use('/uploads', express.static(path_1.join(__dirname, '..', 'uploads')));
    await app.listen(3000);
    console.log("run in port: 3000");
}
bootstrap();
//# sourceMappingURL=main.js.map