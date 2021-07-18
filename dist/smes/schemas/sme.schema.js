"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.smeSchema = new mongoose_1.Schema({
    asset_category: {
        type: String,
    },
    businsess_address: {
        type: String,
    },
    business_premise: {
        type: String,
    },
    business_name: {
        type: String,
    },
    employment_category: {
        type: String,
    },
    general_services: {
        type: String,
    },
    manufacturing: {
        type: String,
    },
    trading: {
        type: String,
    },
    registration_number: {
        type: String,
    },
    specialised_services: {
        type: String,
    },
    phone_number: {
        type: String,
    },
    ownership_type: {
        type: String,
    },
    email: {
        type: String,
        min: 5,
        max: 100,
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
//# sourceMappingURL=sme.schema.js.map