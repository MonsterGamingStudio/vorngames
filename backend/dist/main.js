"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const app_module_1 = require("./app.module");
const auth_constants_1 = require("./auth/auth.constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const isProduction = config.get('NODE_ENV') === 'production';
    if (isProduction) {
        app.set('trust proxy', 1);
    }
    app.use((0, express_session_1.default)({
        secret: config.getOrThrow('JWT_SECRET'),
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: isProduction,
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000,
        },
    }));
    app.setGlobalPrefix('api');
    app.use((0, cookie_parser_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    app.enableCors({
        origin: config.getOrThrow('FRONTEND_URL'),
        credentials: true,
    });
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Vorn Games API')
        .setDescription('VornGames API: Steam auth, scripts catalog, purchases, support')
        .setVersion('1.0')
        .addCookieAuth(auth_constants_1.JWT_COOKIE_NAME)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = config.get('PORT', 3000);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map