"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_controller_1 = require("./users/users.controller");
const user_service_1 = require("./users/user.service");
const smes_controller_1 = require("./smes/smes.controller");
const user_schema_1 = require("./users/schemas/user.schema");
const config_1 = require("@nestjs/config");
const response_handler_service_1 = require("./utils/response-handler.service");
const jwt_service_1 = require("./utils/jwt.service");
const smes_service_1 = require("./smes/smes.service");
const sme_schema_1 = require("./smes/schemas/sme.schema");
const _service_1 = require("./appointments/.service");
const _controller_1 = require("./appointments/.controller");
const _service_2 = require("./locations/.service");
const _controller_2 = require("./locations/.controller");
const _controller_3 = require("./offers/.controller");
const _service_3 = require("./offers/.service");
const _controller_4 = require("./saloonservice/.controller");
const _service_4 = require("./saloonservice/.service");
const configuration = () => ({
    port: parseInt(process.env.PORT, 10) || 8000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
});
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: "User", schema: user_schema_1.userSchema },
                { name: "Sme", schema: sme_schema_1.smeSchema },
            ]),
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URL),
        ],
        controllers: [
            app_controller_1.AppController,
            users_controller_1.UserController,
            smes_controller_1.SmeController,
            _controller_1.AptController,
            _controller_2.LocationController,
            _controller_3.OffersController,
            _controller_4.SaloonController
        ],
        providers: [
            app_service_1.AppService,
            user_service_1.UserService,
            response_handler_service_1.ResponseService,
            jwt_service_1.TokenService,
            smes_service_1.SmeService,
            _service_1.AppointmentService,
            _service_2.LocationService,
            _service_4.SaloonService,
            _service_3.OfferService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map