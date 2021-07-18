"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jwt = require("jsonwebtoken");
class TokenService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    static async shuffleToken(token) {
        return token
            .split('')
            .reverse()
            .join('');
    }
    static async getToken(payload, expiresIn = '30d') {
        const token = await jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn,
        });
        const scrambledToken = this.shuffleToken(token);
        return scrambledToken;
    }
    static async verifyToken(token) {
        const reshuffledToken = await TokenService.shuffleToken(token);
        let output = {};
        try {
            return jwt.verify(reshuffledToken, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    output = {
                        Error: 'Failed to authenticate token',
                        success: false,
                    };
                }
                else {
                    output = {
                        success: true,
                        id: decoded.id,
                        email: decoded.email,
                        fullName: decoded.fullName,
                    };
                }
                return output;
            });
        }
        catch (e) {
            throw e;
        }
    }
    static async checkToken(token) {
        return await TokenService.verifyToken(token);
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=jwt.service.js.map