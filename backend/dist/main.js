"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
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
        .setDescription('VornGames storefront API.\n\n' +
        '**Auth:** login via `GET /api/auth/steam`, then use cookie `auth_token` (Authorize button).\n\n' +
        '**Purchases:** require Steam login (`POST /api/scripts/:id/purchase`).\n\n' +
        '**Admin:** endpoints under `admin/*` require `role=admin` or steamId in STEAM_ADMIN_IDS.')
        .setVersion('1.0')
        .addCookieAuth(auth_constants_1.JWT_COOKIE_NAME, {
        type: 'apiKey',
        in: 'cookie',
        name: auth_constants_1.JWT_COOKIE_NAME,
        description: 'JWT set after Steam login',
    })
        .addTag('auth', 'Steam OpenID authentication')
        .addTag('scripts', 'Public scripts catalog')
        .addTag('purchases', 'Script purchases and downloads')
        .addTag('profile', 'User profile and achievements')
        .addTag('comments', 'Script comments')
        .addTag('notifications', 'In-app notifications')
        .addTag('support', 'User support tickets')
        .addTag('payments', 'UnitPay donations (game currency)')
        .addTag('admin', 'Admin: users, IP blocks, dashboard')
        .addTag('admin/scripts', 'Admin: scripts CRUD and uploads')
        .addTag('admin/comments', 'Admin: comment moderation')
        .addTag('admin/support', 'Admin: support tickets')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig, {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    });
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        },
    });
    const port = config.get('PORT', 3000);
    await app.listen(port);
    console.log(`API listening on port ${port}`);
}
bootstrap().catch((err) => {
    console.error('Failed to start API:', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map