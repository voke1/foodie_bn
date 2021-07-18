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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const response_handler_service_1 = require("../utils/response-handler.service");
let SmeService = class SmeService {
    constructor(SmeModel, responseService) {
        this.SmeModel = SmeModel;
        this.responseService = responseService;
    }
    async createSme(Sme, res) {
        const newSme = new this.SmeModel(Sme);
        try {
            const Sme = await newSme.save();
            console.log('Sme saved: ', Sme);
            if (Sme) {
                return this.responseService.requestSuccessful(res, Sme);
            }
            return {
                success: false,
                message: 'Sme not saved. Please try again',
            };
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async getSme(SmeId, res) {
        try {
            const SME = await this.SmeModel.findById({ _id: SmeId });
            if (SME) {
                return this.responseService.requestSuccessful(res, SME);
            }
            return this.responseService.clientError(res, 'SME not found!');
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async getSmes(res) {
        try {
            const SMEs = await this.SmeModel.find();
            if (SMEs) {
                return this.responseService.requestSuccessful(res, SMEs);
            }
            return this.responseService.clientError(res, 'No SMEs found!');
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async updateSme(Sme, id, res) {
        try {
            const response = await this.SmeModel.findByIdAndUpdate(id, Sme, { new: true });
            if (response) {
                return this.responseService.requestSuccessful(res, response);
            }
            else {
                return this.responseService.clientError(res, 'Error!, Sme not updated');
            }
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async deleteSme(id) {
        return await this.SmeModel.findByIdAndRemove(id);
    }
};
SmeService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Sme')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, response_handler_service_1.ResponseService])
], SmeService);
exports.SmeService = SmeService;
//# sourceMappingURL=smes.service.js.map