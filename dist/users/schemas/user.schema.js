"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        min: 5,
        max: 50,
    },
    lastName: {
        type: String,
        min: 5,
        max: 50,
    },
    email: {
        type: String,
        min: 5,
        max: 100,
    },
    pin: {
        type: String,
    },
    phone: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});
//# sourceMappingURL=user.schema.js.map