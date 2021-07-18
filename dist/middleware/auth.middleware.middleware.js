"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const jwt_service_1 = require("../utils/jwt.service");
const jwt = require("jsonwebtoken");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (request) {
            if (!request.headers.authorization) {
                return false;
            }
            request.user = await this.validateToken(request.headers.authorization);
            return true;
        }
    }
    async validateToken(auth) {
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new common_2.HttpException('Invalid token', common_2.HttpStatus.UNAUTHORIZED);
        }
        const token = auth.split(' ')[1];
        const reshuffledToken = await jwt_service_1.TokenService.shuffleToken(token);
        try {
            const decoded = await jwt.verify(reshuffledToken, process.env.SECRET_KEY);
            return decoded;
        }
        catch (err) {
            const message = 'Token error: ' + (err.message || err.name);
            throw new common_2.HttpException(message, common_2.HttpStatus.UNAUTHORIZED);
        }
    }
};
AuthGuard = __decorate([
    common_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.middleware.middleware.js.map