"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const mongodb_1 = require("mongodb");
let PhotosController = class PhotosController {
    uploadSingle(file) {
        const uri = "mongodb://localhost:27017";
        const client = new mongodb_1.MongoClient.connect(uri, function (err, db) {
            if (err)
                throw err;
            const dbo = db.db("enginedb");
            dbo.collection("photos").insertOne(file, function (err, res) {
                if (err)
                    throw err;
                console.log("1 document inserted");
            });
        });
        var fs = require('fs');
        fs.rename('./uploads/' + file.filename, './uploads/' + file.originalname, function (err) {
            if (err)
                throw err;
            console.log("file renamed");
        });
        console.log(file);
        console.log(file.originalname);
    }
};
__decorate([
    common_1.Post("upload"),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("photo", {
        dest: "./uploads",
        fileFilter: function (req, file, cb) {
            file.filename = file.originalname;
            cb(null, true);
        },
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PhotosController.prototype, "uploadSingle", null);
PhotosController = __decorate([
    common_1.Controller('photos')
], PhotosController);
exports.PhotosController = PhotosController;
//# sourceMappingURL=photos.controller.js.map