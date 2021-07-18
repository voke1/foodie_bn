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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    async Signup(user, req, res) {
        console.log('This is User: ', user);
        return await this.UserService.signUp(user, res);
    }
    async Signin(user, req, res) {
        console.log('This is User: ', user);
        return await this.UserService.signIn(user, res);
    }
    async findProfile(id, req, res) {
        console.log('This is Email: ', id);
        return await this.UserService.getProfile(id, res);
    }
    async searchProfile(phone, user, req, res) {
        return await this.UserService.updateProfile(user, phone, res);
    }
    async updateProfile(id, user, req, res) {
        console.log('This is Email: ', id);
        return await this.UserService.changePassword(user, id, res);
    }
};
__decorate([
    common_1.Post('auth/user/signup'),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Signup", null);
__decorate([
    common_1.Post('auth/user/signin'),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Signin", null);
__decorate([
    common_1.Get('profile/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findProfile", null);
__decorate([
    common_1.Put('profile/:phone'),
    __param(0, common_1.Param('phone')),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "searchProfile", null);
__decorate([
    common_1.Put('profile/update/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
UserController = __decorate([
    common_1.Controller('api/v1'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map