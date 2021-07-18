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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const jwt_service_1 = require("../utils/jwt.service");
const response_handler_service_1 = require("../utils/response-handler.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(clientModel, responseService) {
        this.clientModel = clientModel;
        this.responseService = responseService;
    }
    async signUp(user, res) {
        try {
            const foundUser = await this.clientModel.findOne({ email: user.email });
            if (foundUser) {
                return this.responseService.clientError(res, 'User already exist');
            }
            user.pin = await bcrypt.hash(user.pin, 6);
            const userCreated = await new this.clientModel(user);
            if (userCreated) {
                userCreated.save();
                return this.responseService.requestSuccessful(res, user);
            }
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async signIn(user, res) {
        try {
            const foundUser = await this.clientModel.findOne({ phone: user.phone });
            if (foundUser) {
                const token = await jwt_service_1.TokenService.getToken({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }, '30d');
                user.token = token;
                return this.responseService.requestSuccessful(res, user);
            }
            else {
                return this.responseService.clientError(res, 'User not found');
            }
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async getProfile(phone, res) {
        try {
            const user = await this.clientModel.findOne({ phone });
            if (user) {
                return this.responseService.requestSuccessful(res, user);
            }
            else {
                return this.responseService.clientError(res, 'User not found');
            }
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async updateProfile(user, id, res) {
        try {
            const response = await this.clientModel.findByIdAndUpdate(id, user, { new: true });
            if (response) {
                return this.responseService.requestSuccessful(res, response);
            }
            else {
                return this.responseService.clientError(res, 'Error!, User not updated');
            }
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
    async changePassword(user, email, res) {
        try {
            const response = await this.clientModel.findOne({ email });
            if (user.new_password !== user.new_password_confirmation) {
                return this.responseService.clientError(res, 'Error! please confirm new password!');
            }
            else if (user.current_password !== response.password) {
                return this.responseService.clientError(res, 'please confirm current password!');
            }
            else {
                const result = await this.clientModel.updateOne({ password: user.new_password });
                return this.responseService.requestSuccessful(res, result);
            }
        }
        catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, response_handler_service_1.ResponseService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map