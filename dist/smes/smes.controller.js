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
exports.SmeController = void 0;
const common_1 = require("@nestjs/common");
const smes_service_1 = require("./smes.service");
let SmeController = class SmeController {
    constructor(SmeService) {
        this.SmeService = SmeService;
    }
    async createSME(Sme, req, res) {
        console.log('This is Sme: ', Sme);
        return this.SmeService.createSme(Sme, res);
    }
    findSmes(req, res) {
        return this.SmeService.getSmes(res);
    }
    findSme(SmeId, req, res) {
        return this.SmeService.getSme(SmeId, res);
    }
    updateSme(smeId, Sme, req, res) {
        return this.SmeService.updateSme(Sme, smeId, res);
    }
    delete(id) {
        return this.SmeService.deleteSme(id);
    }
};
__decorate([
    common_1.Post('sme'),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SmeController.prototype, "createSME", null);
__decorate([
    common_1.Get('sme'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SmeController.prototype, "findSmes", null);
__decorate([
    common_1.Get('Sme/:SmeId'),
    __param(0, common_1.Param('SmeId')),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SmeController.prototype, "findSme", null);
__decorate([
    common_1.Put('sme/:smeId'),
    __param(0, common_1.Param('smeId')),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SmeController.prototype, "updateSme", null);
__decorate([
    common_1.Delete('Sme/:SmeId'),
    __param(0, common_1.Param('SmeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SmeController.prototype, "delete", null);
SmeController = __decorate([
    common_1.Controller('api/v1'),
    __metadata("design:paramtypes", [smes_service_1.SmeService])
], SmeController);
exports.SmeController = SmeController;
//# sourceMappingURL=smes.controller.js.map