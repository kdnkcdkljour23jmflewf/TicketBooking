"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const typeorm_1 = require("@nestjs/typeorm");
const auth_entity_1 = require("./auth.entity");
const jwt_1 = require("@nestjs/jwt");
const jwt_2 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
const jwt_service_1 = require("./jwt.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([auth_entity_1.Auth]), jwt_1.JwtModule],
        exports: [typeorm_1.TypeOrmModule, auth_service_1.AuthService, jwt_1.JwtModule, jwt_service_1.JwtUtilService],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_2.JwtService, jwt_strategy_1.JwtStrategy, jwt_service_1.JwtUtilService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map