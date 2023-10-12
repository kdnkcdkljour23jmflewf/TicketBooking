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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_entity_1 = require("./auth.entity");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async register(userDto) {
        const userRepository2 = this.usersRepository.create(userDto);
        const { username, email, password } = userDto;
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = this.usersRepository.create({
            username,
            email,
            password: hashedPassword,
        });
        this.usersRepository.save(user);
        return 'User registered successfully!';
    }
    async login(email, password) {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
    async generateToken(email) {
        const payload = { email: email };
        const accessToken = this.jwtService.sign(payload, { secret: 'your-secret-key' });
        return { accessToken };
    }
    async getUserByEmail(email) {
        const user = await this.usersRepository.findOne({ where: { email } });
        return user;
    }
    async updateUser(id, userData) {
        const userupdate = await this.usersRepository.findOne({ where: { id } });
        console.log('userupdate');
        userupdate.email = userData.email;
        userupdate.username = userData.email;
        await this.usersRepository.save(userupdate);
        return 'success';
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_entity_1.Auth)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map